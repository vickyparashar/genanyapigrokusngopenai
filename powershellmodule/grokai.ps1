function Review-FileContent {
    param (
        [string]$FilePath,
        [string]$Instruction
    )

    $apiKey = "xai-1YU6eJGnUgOKmJR6IkBl3zaPy5fNKGjFtN8Dg4zPkdvssXtqWEIlY8zb6LHlS9v7XE9uXVSz3T0h80kQ"

    if (-Not (Test-Path $FilePath)) {
        throw "The file path '$FilePath' does not exist."
    }

    $Content = Get-Content -Path $FilePath -Raw

    $jsonPayload = @{
        messages = @(
            @{ role = "system"; content = $Instruction+' sReturn only the updated version, without any additional explanation or data.' },
            @{ role = "user"; content = "$FilePath \n"+$Content }
        );
        model = "grok-beta";
        stream = $false;
        temperature = 0;
    } | ConvertTo-Json -Depth 10

    try {
        $response = Invoke-RestMethod -Uri "https://api.x.ai/v1/chat/completions" -Method Post -Headers @{
            "Content-Type" = "application/json"
            "Authorization" = "Bearer $apiKey"
        } -Body $jsonPayload -SkipCertificateCheck
        
        Write-Host $response.choices[0].message.content
        $updatedContent = Format-ReviewedContent -ReviewedContent $response.choices[0].message.content
        if ($null -ne $updatedContent) {
            Set-Content -Path $FilePath -Value $updatedContent
        } else {
            Write-Warning "No updated content was returned."
        }
    } catch {
        Write-Error "Error reviewing file content: $_"
        throw $_
    }
}

function Format-ReviewedContent {
    param (
        [string]$ReviewedContent
    )

    # Split the content by lines, skip the first and last lines
    $lines = $ReviewedContent -split "`r?`n"
    return ($lines[1..($lines.Count - 2)] -join "`n").Trim()
}


# Example for testing

# Create a sample file for testing
$testFilePath = "C:\Vicky\Tools\genanyapigrokusngopenai\powershellmodule\samplecode.ps1"
$Instruction = "Please add concise comments to the code."

# Call the Review-FileContent function
Review-FileContent -FilePath $testFilePath -Instruction $Instruction
