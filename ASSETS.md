# 📸 Where to drop your images & files

I can see the photos/PDFs you pasted in chat, but I can't write image files to disk —
only you can save them. Save each file with the **exact name and location** below, then
re-deploy (`npm run deploy` or just `git push` if using the GitHub Action).

Until a file is added, the site degrades gracefully: the hero shows an animated **DS**
monogram, and any missing gallery/certificate images are simply hidden.

---

## 1. Headshot (hero + about)
| Save as | Suggested photo |
|---|---|
| `public/images/headshot.jpg` | The **cream/beige shirt, glasses, big smile, leafy backdrop** shot — cleanest portrait. (Or the grey-blazer one.) |

## 2. Résumé PDF (the "Résumé" button)
| Save as | File |
|---|---|
| `public/Dhruv_Samdani_Resume.pdf` | Your `resume_general.pdf` (the current one). |

## 3. Oracle certificates
| Save as | File |
|---|---|
| `public/certs/oci-ai-foundations.jpg` | OCI **AI** Foundations Associate certificate |
| `public/certs/oci-foundations.jpg` | OCI Foundations Associate certificate |

*(PNG works too — just keep the name, e.g. `oci-ai-foundations.png`, and update the path
in `src/data.js` → `certifications[].image`.)*

## 4. Gallery — "Leadership & moments"
Save these in `public/images/gallery/`. Suggested mapping from the photos you sent:

| Save as | Suggested photo | Caption (editable in `src/data.js`) |
|---|---|---|
| `g1.jpg` | At the podium, white shirt, red curtain (speaking) | Hosting Effervescence'25 |
| `g2.jpg` | At the podium, white shirt (wide shot) | On stage |
| `g3.jpg` | Holding the mic, navy shirt, blue stage backdrop | Anchoring an event |
| `g4.jpg` | Back to camera, pink blazer, facing the night crowd | Crowd of thousands |
| `g5.jpg` | Back to camera, pink blazer, crowd + chairs | Main stage |
| `g6.jpg` | Candid — black printed shirt / grey blazer | Coordinator duties |

You can add/remove gallery items freely in `src/data.js` → `gallery`. Any entry whose
file is missing is auto-hidden.

---

### Tip: resize big phone photos before committing
Huge images slow the page. Aim for ~1200px wide for the gallery and ~800px for the
headshot. Any image tool works, or run this if you have ImageMagick:
```
magick mogrify -resize 1200x1200\> public/images/gallery/*.jpg
```
