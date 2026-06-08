import sys, zipfile, re, os, json

def slide_key(n):
    m = re.search(r'slide(\d+)\.xml$', n)
    return int(m.group(1)) if m else 0

def extract(path):
    out = []
    with zipfile.ZipFile(path) as z:
        slides = sorted([n for n in z.namelist()
                         if re.match(r'ppt/slides/slide\d+\.xml$', n)], key=slide_key)
        for s in slides:
            xml = z.read(s).decode('utf-8', 'ignore')
            texts = re.findall(r'<a:t>(.*?)</a:t>', xml, re.S)
            txt = ' '.join(t.strip() for t in texts if t.strip())
            for a,b in [('&amp;','&'),('&lt;','<'),('&gt;','>'),('&quot;','"'),('&apos;',"'")]:
                txt = txt.replace(a,b)
            if txt.strip():
                out.append({"slide": slide_key(s), "text": txt})
    return out

result = {}
for path in sys.argv[1:]:
    result[os.path.basename(path)] = extract(path)

with open("_material.json", "w", encoding="utf-8") as f:
    json.dump(result, f, ensure_ascii=False, indent=1)
print("OK ->", "_material.json")
for k,v in result.items():
    print(f"  {k}: {len(v)} slides con texto")
