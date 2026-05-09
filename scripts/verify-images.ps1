$repoRoot = 'c:\Users\pc\Desktop\projects\phone-shop'
$path = Join-Path $repoRoot 'src\data\products.ts'
$content = Get-Content -Raw -Path $path
$pattern = 'id:\s*"(?<id>[^"]+)"[\s\S]*?image:\s*"(?<url>[^"]+)"'
$matches = [regex]::Matches($content,$pattern)
if ($matches.Count -eq 0) {
  Write-Output "ERROR No matches found"
  exit 1
}
foreach ($m in $matches) {
  $id = $m.Groups['id'].Value
  $url = $m.Groups['url'].Value
  try {
    $resp = Invoke-WebRequest -Uri $url -Method Head -TimeoutSec 15 -UseBasicParsing -ErrorAction Stop
    $status = $resp.StatusCode
    $ct = $resp.Headers['Content-Type']
    if ($status -eq 200 -and $ct -match 'image') {
      Write-Output ("OK`t{0}`t{1}`t{2}`t{3}" -f $id,$status,$ct,$url)
      continue
    }
  } catch {
    # fall through to GET fallback
  }
  try {
    $resp = Invoke-WebRequest -Uri $url -Method Get -TimeoutSec 15 -Headers @{ 'Range'='bytes=0-0' } -UseBasicParsing -ErrorAction Stop
    $status = $resp.StatusCode
    $ct = $resp.Headers['Content-Type']
    if ($status -eq 200 -and $ct -match 'image') {
      Write-Output ("OK`t{0}`t{1}`t{2}`t{3}" -f $id,$status,$ct,$url)
    } else {
      Write-Output ("BROKEN`t{0}`t{1}`t{2}`t{3}" -f $id,$status,$ct,$url)
    }
  } catch {
    Write-Output ("BROKEN`t{0}`tERR`t{1}`t{2}" -f $id,$_.Exception.Message,$url)
  }
}
