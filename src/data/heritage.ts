export type Category = "Architecture" | "Traditional Art" | "Textiles" | "Music & Dance" | "Craftsmanship";

export interface HeritageItem {
  id: string;
  name: string;
  origin: string;
  category: Category;
  significance: string;
  speciality: string;
  history: string;
  description: string;
  facts: string[];
}

export const categories: { name: Category; subtitle: string; searchTerm: string }[] = [
  { name: "Architecture", subtitle: "Monuments that tell timeless stories", searchTerm: "indian architecture monument" },
  { name: "Traditional Art", subtitle: "Colors woven into cultural identity", searchTerm: "indian traditional art painting" },
  { name: "Textiles", subtitle: "Threads of heritage and craftsmanship", searchTerm: "indian textile weaving" },
  { name: "Music & Dance", subtitle: "Rhythms of a civilization", searchTerm: "indian classical dance" },
  { name: "Craftsmanship", subtitle: "Hands that shape beauty", searchTerm: "indian handicraft artisan" },
];

export const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
  "Uttarakhand","West Bengal","Delhi","Jammu & Kashmir"
];

export const heritageItems: HeritageItem[] = [
  // ── Architecture ──
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    origin: "Uttar Pradesh",
    category: "Architecture",
    significance: "A UNESCO World Heritage Site and one of the New Seven Wonders of the World, symbolizing eternal love.",
    speciality: "Built entirely of white Makrana marble with intricate inlay work of 28 types of precious and semi-precious stones.",
    history: "Commissioned in 1632 by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, who died during childbirth. Over 20,000 artisans from across Asia worked for 22 years to complete this masterpiece. The chief architect was Ustad Ahmad Lahauri.",
    description: "Rising like a dream on the banks of the Yamuna, the Taj Mahal is the ultimate testament to love immortalized in marble. Its perfect symmetry, luminous white facade, and gardens designed to mirror paradise make it one of humanity's greatest architectural achievements.",
    facts: ["Changes color throughout the day — pinkish at dawn, white at noon, golden at dusk", "The four minarets are slightly tilted outward to protect the main tomb if they collapse", "The calligraphy on the Taj increases in size with height to appear uniform from below"]
  },
  {
    id: "hampi",
    name: "Hampi Ruins",
    origin: "Karnataka",
    category: "Architecture",
    significance: "Capital of the Vijayanagara Empire, one of the richest cities in the medieval world.",
    speciality: "Sprawling landscape of over 1,600 surviving ruins spread across 26 square kilometers of boulder-strewn terrain.",
    history: "Founded in the 14th century, Hampi was the capital of the Vijayanagara Empire from 1336 to 1565. At its peak, it was larger than Rome and was described by foreign travelers as a city of astounding wealth, with bazaars selling pearls and precious gems.",
    description: "Amidst a surreal landscape of giant boulders and banana plantations, the ruins of Hampi whisper tales of an empire that once dazzled the world. Stone chariots, musical pillars, and elaborate temple complexes stand as silent witnesses to a golden age.",
    facts: ["The stone chariot at Vittala Temple is actually a shrine, not a real chariot", "The musical pillars of the Vittala Temple produce different musical notes when tapped", "Persian ambassador Abdur Razzaq described Hampi as a city 'such that the eye has not seen nor the ear heard of any place resembling it'"]
  },
  {
    id: "red-fort",
    name: "Red Fort",
    origin: "Delhi",
    category: "Architecture",
    significance: "Symbol of India's sovereignty — the Prime Minister hoists the national flag here every Independence Day.",
    speciality: "Massive red sandstone fortification spanning 254 acres with elaborate Mughal gardens and audience halls.",
    history: "Built by Shah Jahan in 1638 when he shifted his capital from Agra to Delhi. The fort took nearly a decade to complete and served as the residence of Mughal emperors for nearly 200 years until 1857.",
    description: "The Red Fort stands as Delhi's crown jewel, its crimson walls enclosing a world of marble palaces, flowing water channels, and the legendary Peacock Throne room. It is where Mughal grandeur reached its zenith.",
    facts: ["Originally called 'Qila-i-Mubarak' meaning the Blessed Fort", "The Koh-i-Noor diamond was once part of the Peacock Throne here", "Its walls stretch for 2.5 kilometers"]
  },
  {
    id: "qutub-minar",
    name: "Qutub Minar",
    origin: "Delhi",
    category: "Architecture",
    significance: "The tallest brick minaret in the world and a masterpiece of Indo-Islamic architecture.",
    speciality: "73-meter tower with five distinct stories, each marked by a projecting balcony, featuring intricate carvings and Quranic inscriptions.",
    history: "Construction began in 1193 by Qutb-ud-din Aibak after defeating the last Hindu kingdom in Delhi. Completed by his successor Iltutmish. The complex includes the Iron Pillar that has resisted rust for over 1,600 years.",
    description: "Soaring into the Delhi sky like an ancient sentinel, the Qutub Minar is a triumph of medieval engineering. Each story tells a different architectural story — from the fluted red sandstone base to the marble and sandstone upper levels.",
    facts: ["The mysterious Iron Pillar in the complex has not rusted in 1,600 years", "It leans slightly, about 25 inches from the vertical", "Each floor has a different architectural style reflecting its different builders"]
  },
  {
    id: "konark-temple",
    name: "Konark Sun Temple",
    origin: "Odisha",
    category: "Architecture",
    significance: "A 13th-century temple designed as a colossal chariot of the Sun God, a masterpiece of Kalinga architecture.",
    speciality: "Entire temple shaped as a massive chariot with 24 elaborately carved stone wheels and 7 horses.",
    history: "Built by King Narasimhadeva I of the Eastern Ganga dynasty around 1250 CE. The temple was so magnificent that sailors called it the 'Black Pagoda' as it drew ships towards the shore.",
    description: "At dawn, when the first rays of the sun illuminate the intricately carved wheels and dancing figures, the Konark Sun Temple seems to come alive — a stone chariot frozen in its eternal journey across the sky.",
    facts: ["The 24 wheels function as sundials and can tell time accurately", "European sailors used it as a navigation landmark", "The main sanctum's magnetic properties once suspended the crown idol in mid-air"]
  },
  {
    id: "meenakshi-temple",
    name: "Meenakshi Temple",
    origin: "Tamil Nadu",
    category: "Architecture",
    significance: "One of the most important Hindu temples, a living center of ancient Dravidian culture.",
    speciality: "14 magnificent gopurams (gateway towers) covered with thousands of colorful mythological sculptures.",
    history: "While the original temple dates to the 6th century BCE, the current structure was largely built by the Nayak dynasty between the 16th and 18th centuries. Legend says the city of Madurai was built around this temple.",
    description: "A kaleidoscopic explosion of color and devotion, the Meenakshi Temple is a city within a city. Its towering gopurams, adorned with 33,000 sculptures, rise above Madurai like frozen fireworks celebrating the divine.",
    facts: ["Contains approximately 33,000 sculptures", "The temple complex covers 14 acres with 4,500+ pillars", "The Hall of Thousand Pillars has pillars that produce musical notes"]
  },
  {
    id: "charminar",
    name: "Charminar",
    origin: "Telangana",
    category: "Architecture",
    significance: "The iconic landmark of Hyderabad, built to commemorate the end of a deadly plague.",
    speciality: "Four grand arches supporting four ornate minarets, blending Indo-Islamic architecture.",
    history: "Built in 1591 by Muhammad Quli Qutb Shah, the fifth ruler of the Qutb Shahi dynasty, to mark the founding of Hyderabad and to commemorate the eradication of plague from the city.",
    description: "Standing at the heart of old Hyderabad, the Charminar is where history meets bustling life. Its four graceful minarets watch over the legendary pearl and bangle bazaars that have thrived in its shadow for centuries.",
    facts: ["A mosque exists on the top floor, one of the oldest in the city", "The four minarets represent the first four Caliphs of Islam", "A secret tunnel reportedly connects it to Golconda Fort"]
  },
  {
    id: "ajanta-caves",
    name: "Ajanta Caves",
    origin: "Maharashtra",
    category: "Architecture",
    significance: "30 rock-cut Buddhist cave monuments dating from the 2nd century BCE, showcasing the finest surviving examples of ancient Indian art.",
    speciality: "Elaborate paintings and sculptures that have survived nearly 2,000 years, depicting the Jataka tales.",
    history: "Carved over several centuries from the 2nd century BCE to about 480 CE. Abandoned and forgotten for over a millennium, they were accidentally discovered in 1819 by a British officer during a tiger hunt.",
    description: "Hidden in a horseshoe-shaped gorge, the Ajanta Caves are a time capsule of Buddhist art. Their murals, painted with natural pigments on mud plaster, glow with an ethereal beauty that has survived nearly two millennia.",
    facts: ["Rediscovered accidentally during a British tiger hunt in 1819", "The paintings were done using natural pigments that have lasted 2,000 years", "Cave 1's painting of Bodhisattva Padmapani is considered a masterpiece of world art"]
  },
  {
    id: "ellora-caves",
    name: "Ellora Caves",
    origin: "Maharashtra",
    category: "Architecture",
    significance: "34 caves representing Buddhist, Hindu, and Jain faiths — a unique testament to religious harmony.",
    speciality: "The Kailasa Temple (Cave 16) is the largest monolithic rock excavation in the world, carved from top to bottom.",
    history: "Built between the 6th and 11th centuries CE by the Rashtrakuta and Yadava dynasties. The Kailasa Temple alone required the removal of an estimated 200,000 tonnes of rock.",
    description: "Ellora is where three great faiths — Buddhism, Hinduism, and Jainism — stand side by side in stone, carved with breathtaking ambition. The Kailasa Temple defies imagination: an entire mountain sculpted into a temple.",
    facts: ["The Kailasa Temple involved removing 200,000 tonnes of rock", "It was carved from top to bottom, unlike built structures", "The 34 caves span three religions coexisting peacefully"]
  },
  {
    id: "gateway-of-india",
    name: "Gateway of India",
    origin: "Maharashtra",
    category: "Architecture",
    significance: "Mumbai's most iconic landmark, built to commemorate the visit of King George V and Queen Mary.",
    speciality: "Indo-Saracenic arch monument overlooking the Arabian Sea, built from yellow basalt and concrete.",
    history: "Built between 1911 and 1924, designed by architect George Wittet. Ironically, it became the symbolic exit point when the last British troops left India in 1948, passing through the same gateway built to welcome their king.",
    description: "Standing sentinel where Mumbai meets the sea, the Gateway of India is both a welcome and a farewell — to emperors, to eras, and to the millions who pass through its grand arch daily.",
    facts: ["The last British troops left India through this gateway in 1948", "It cost 2.1 million rupees to build in the 1920s", "The foundation stone was laid before the final design was approved"]
  },

  // ── Traditional Art ──
  {
    id: "madhubani",
    name: "Madhubani Painting",
    origin: "Bihar",
    category: "Traditional Art",
    significance: "An ancient art form dating back to the time of Ramayana, traditionally painted by women on mud walls.",
    speciality: "Characterized by geometric patterns, vibrant colors, and depictions of nature and mythology with no empty space left on the canvas.",
    history: "Originating in the Mithila region of Bihar, this art form is believed to have originated when King Janaka commissioned artists to create paintings for his daughter Sita's wedding to Lord Ram. For centuries it remained on mud walls before being discovered on paper in the 1960s.",
    description: "Every line in a Madhubani painting tells a story. Born from the mud walls of Bihar's villages, this art form transforms flat surfaces into vibrant tapestries where gods dance, fish swim, and flowers bloom in geometric perfection.",
    facts: ["Traditionally only women were allowed to practice this art", "No empty space is left — every gap is filled with flowers, animals, or geometric patterns", "Natural dyes from plants and minerals are used for colors"]
  },
  {
    id: "warli",
    name: "Warli Art",
    origin: "Maharashtra",
    category: "Traditional Art",
    significance: "One of the oldest forms of Indian art, practiced by the Warli tribe for over 2,500 years.",
    speciality: "Uses only white pigment (rice paste) on brown surfaces, depicting daily life through basic geometric shapes — circles, triangles, and squares.",
    history: "The Warli tribe of Maharashtra's Sahyadri mountains has practiced this art since 2500 BCE. It remained largely unknown outside the tribe until the 1970s when artist Jivya Soma Mashe brought it to mainstream attention.",
    description: "In the simplicity of circles, triangles, and lines, Warli art captures the entire universe of tribal life. White figures dance, hunt, and celebrate on earthy brown surfaces, telling stories that predate written language.",
    facts: ["Uses only three basic shapes: circle (sun/moon), triangle (mountains/trees), and square (sacred enclosure)", "The central motif 'Chauk' represents the mother goddess", "It was only recognized as an art form in the 1970s"]
  },
  {
    id: "gond",
    name: "Gond Art",
    origin: "Madhya Pradesh",
    category: "Traditional Art",
    significance: "Vibrant tribal art from one of India's largest tribal communities, the Gond people.",
    speciality: "Intricate dot-and-dash patterns filling large forms of animals, birds, and trees with mesmerizing detail.",
    history: "The Gond people, whose name derives from 'Kond' meaning green mountains, have been creating this art for over 1,400 years. The art was brought to international fame by artist Jangarh Singh Shyam in the 1980s.",
    description: "Gond art transforms the forests and creatures of central India into psychedelic visions of color. Every animal, every tree is filled with elaborate patterns of dots and dashes, as if revealing the hidden energy within all living things.",
    facts: ["Every dot and dash in the pattern carries spiritual significance", "The Gond believe that viewing good images brings good luck", "Trees are the most sacred subject in Gond art, seen as a connection between earth and sky"]
  },
  {
    id: "kalamkari",
    name: "Kalamkari",
    origin: "Andhra Pradesh",
    category: "Traditional Art",
    significance: "Ancient hand-painted or block-printed cotton textile art depicting mythological narratives.",
    speciality: "Entirely hand-drawn using a bamboo pen (kalam) with natural vegetable dyes, requiring 23 steps to complete.",
    history: "Dating back over 3,000 years, Kalamkari flourished under the patronage of Mughal and Golconda courts. The art centers of Srikalahasti and Machilipatnam developed distinct styles — pen and block respectively.",
    description: "With a bamboo pen dipped in natural dyes, Kalamkari artists bring entire epics to life on cotton canvas. The Ramayana and Mahabharata unfold in earthy tones, each piece requiring weeks of patient, meditative artistry.",
    facts: ["Each piece undergoes 23 elaborate steps from start to finish", "Only natural dyes are used — from cow milk to plant extracts", "A single large Kalamkari can take months to complete"]
  },
  {
    id: "pattachitra",
    name: "Pattachitra",
    origin: "Odisha",
    category: "Traditional Art",
    significance: "Ancient scroll painting tradition closely linked to the worship of Lord Jagannath in Puri.",
    speciality: "Painted on specially prepared cotton cloth (patta) with natural colors, featuring bold outlines and rich detailing.",
    history: "Originating in Odisha, Pattachitra has been practiced for over a thousand years. The art form is deeply connected to the Jagannath Temple of Puri, where artists paint the deities' images when the original wooden idols are replaced every 12 years.",
    description: "Pattachitra paintings are windows into the divine. On specially treated cloth, artists create intricate mythological scenes with such devotion that each brushstroke becomes a prayer, each color a offering.",
    facts: ["The canvas is prepared with chalk and tamarind seed gum", "All colors are derived from natural sources — white from conch shells, red from red stone", "Artists belong to the 'Chitrakar' community and train from childhood"]
  },
  {
    id: "tanjore",
    name: "Tanjore Painting",
    origin: "Tamil Nadu",
    category: "Traditional Art",
    significance: "Classical South Indian painting known for its rich colors, surface richness, and compact composition.",
    speciality: "Embellished with semi-precious stones, gold foil, and raised plaster work creating a 3D effect.",
    history: "Developed in the 16th century under the patronage of the Nayak and Maratha rulers of Thanjavur. Originally adorned temple walls and palaces, depicting Hindu gods and goddesses in a distinctive ornate style.",
    description: "A Tanjore painting doesn't just hang on a wall — it radiates. The combination of gold leaf, embedded gems, and rich colors creates an almost three-dimensional divine presence. These are devotional objects as much as art pieces.",
    facts: ["Real gold foil is used for the gilding work", "Semi-precious stones and glass beads are embedded into the painting", "The raised effect is created using a mixture of chalk powder and gum"]
  },
  {
    id: "phad",
    name: "Phad Painting",
    origin: "Rajasthan",
    category: "Traditional Art",
    significance: "Narrative scroll painting tradition used as portable temples by traveling storytellers.",
    speciality: "Large-format paintings on cloth scrolls depicting the entire life story of folk deities Pabuji and Devnarayan.",
    history: "Originating in Bhilwara, Rajasthan, Phad paintings have been created by the Joshi family for over 700 years. These scrolls served as portable temples for nomadic communities, with priest-singers narrating the depicted stories.",
    description: "Unrolled under starlit Rajasthani skies, a Phad painting becomes a theater of gods and heroes. These narrative scrolls are among the world's oldest traditions of visual storytelling, painted in bold, earthy hues.",
    facts: ["Only the Joshi family of Bhilwara traditionally had the right to paint Phads", "A completed Phad is ritually consecrated and treated as a temple", "When a Phad becomes too old, it is ceremonially retired in a river"]
  },
  {
    id: "miniature",
    name: "Miniature Painting",
    origin: "Rajasthan",
    category: "Traditional Art",
    significance: "Intricate small-scale paintings that are jewels of Indian artistic tradition, patronized by Mughal and Rajput courts.",
    speciality: "Extremely fine brushwork using brushes made from squirrel hair, with colors from precious minerals and metals.",
    history: "Indian miniature painting evolved from Western Indian manuscript illustrations. It reached its zenith under the Mughal emperors, particularly Akbar, who established a royal workshop of over 100 artists. Regional schools in Rajasthan, Pahari, and Deccan developed distinctive styles.",
    description: "To look at a miniature painting is to enter a world of impossible detail. Faces have expressions, flowers have individual petals, and skies have gradations — all within inches. These are worlds in miniature, painted with supernatural patience.",
    facts: ["Some brushes use only a single squirrel hair for the finest details", "Colors were made from ground precious stones — lapis lazuli for blue, gold for highlights", "A single painting could take months to complete"]
  },
  {
    id: "cheriyal",
    name: "Cheriyal Scroll Painting",
    origin: "Telangana",
    category: "Traditional Art",
    significance: "A stylized narrative scroll painting tradition unique to Telangana, used in visual storytelling.",
    speciality: "Vibrant red background with bold figures painted in a distinctive style, telling stories from mythology.",
    history: "Created by the Nakashi artisan community of Cheriyal village in Telangana for over 500 years. These scrolls were used by traveling bards to narrate stories from the Puranas to rural audiences.",
    description: "Against a blazing red background, the characters of Hindu mythology come alive in bold, expressive strokes. Cheriyal paintings are India's ancient comic strips — sequential art that has entertained and educated for centuries.",
    facts: ["The distinctive red background symbolizes the earth", "Stories are read from bottom to top", "Only natural materials and dyes are used in traditional scrolls"]
  },
  {
    id: "kalighat",
    name: "Kalighat Painting",
    origin: "West Bengal",
    category: "Traditional Art",
    significance: "19th-century Bengal's most distinctive art form, born near the famous Kalighat Temple in Kolkata.",
    speciality: "Bold, sweeping brushstrokes with minimal background, creating dramatic figure compositions.",
    history: "Emerged in the 19th century around the Kalighat Temple in Calcutta. Originally depicting gods and goddesses for pilgrims, it evolved into biting social and political satire, becoming India's first pop art movement.",
    description: "With bold sweeping lines and minimal fuss, Kalighat paintings cut to the essence. From divine figures to satirical commentary on colonial society, this art form from Kolkata's temple district was India's first pop art revolution.",
    facts: ["Considered India's first 'pop art' — mass produced for pilgrims at affordable prices", "Later works satirized British colonial society and Bengali babus", "Influenced modern Indian artists including Jamini Roy"]
  },

  // ── Textiles ──
  {
    id: "banarasi",
    name: "Banarasi Silk",
    origin: "Uttar Pradesh",
    category: "Textiles",
    significance: "Among the finest sarees in India, regarded as the ultimate bridal wear in Indian weddings.",
    speciality: "Woven with real gold and silver zari threads, featuring intricate Mughal-inspired motifs.",
    history: "Banarasi weaving dates back 600 years, believed to have been brought by Persian traders. The Mughal era saw the art reach its zenith, with weavers creating fabrics so fine they were called 'woven air.'",
    description: "A Banarasi saree is not merely fabric — it is heritage draped. Each one takes weeks to months to weave, with every thread of gold zari carrying forward a 600-year-old tradition of unparalleled textile artistry.",
    facts: ["A single saree can take 15 days to 6 months to weave", "Traditionally woven with real gold and silver threads", "A fine Banarasi saree can have up to 5,600 warp threads"]
  },
  {
    id: "kanjeevaram",
    name: "Kanjeevaram Silk",
    origin: "Tamil Nadu",
    category: "Textiles",
    significance: "Called the 'Queen of Silks,' these sarees are essential in South Indian culture and ceremonies.",
    speciality: "Known for their wide contrast borders and rich, heavy pure mulberry silk with a distinctive sheen.",
    history: "Originating from the temple town of Kanchipuram, this weaving tradition is over 400 years old. Legend says the weavers descended from Sage Markanda, the master weaver of the gods.",
    description: "When a Kanjeevaram saree catches the light, it shimmers with the weight of centuries. Woven from pure mulberry silk with contrasting borders, each piece is a monument to the weavers of Kanchipuram who weave magic on wooden looms.",
    facts: ["The body and border are woven separately and then interlocked — a unique technique", "Takes 5,000 to 10,000 silkworm cocoons to make one saree", "The traditional test of quality: a genuine Kanjeevaram can be folded small enough to pass through a ring"]
  },
  {
    id: "bandhani",
    name: "Bandhani",
    origin: "Gujarat",
    category: "Textiles",
    significance: "One of the oldest tie-dye traditions in the world, integral to Gujarati and Rajasthani culture.",
    speciality: "Tiny dots created by plucking the fabric with fingernails and tying each dot individually before dyeing.",
    history: "Evidence of Bandhani dates back to the Indus Valley Civilization (3000 BCE). The earliest known Bandhani saree is preserved in a 6th-century fresco at Ajanta. The craft centers of Jamnagar and Kutch have practiced it for centuries.",
    description: "Each dot in a Bandhani textile is a tiny knot tied by nimble fingers — thousands of them creating patterns that bloom like constellations when the fabric is dyed. It is meditation transformed into fabric.",
    facts: ["A single saree can have over 16,000 tiny hand-tied dots", "The finest Bandhani has dots so small they can barely be seen", "The term 'Bandhani' comes from Sanskrit 'bandha' meaning to tie"]
  },
  {
    id: "chanderi",
    name: "Chanderi Weave",
    origin: "Madhya Pradesh",
    category: "Textiles",
    significance: "A centuries-old weaving tradition known for creating fabric so sheer it was called 'woven moonlight.'",
    speciality: "Gossamer-thin fabric combining silk and cotton, with traditional motifs of coins, flowers, and peacocks.",
    history: "Chanderi weaving dates back to the 2nd century BCE, with mentions in the Vedic texts. The Mughal era saw its peak patronage, and it was favored by royalty for its lightweight elegance in the hot Indian climate.",
    description: "Hold a Chanderi fabric against light, and you'll understand why poets called it woven moonlight. This gossamer textile from the ancient town of Chanderi is a whisper of silk and cotton, almost weightless yet rich in heritage.",
    facts: ["So fine that 6 yards of fabric can fold into a matchbox", "The weavers use a traditional pit loom that hasn't changed in centuries", "Chanderis were sent as diplomatic gifts to Mughal courts"]
  },
  {
    id: "paithani",
    name: "Paithani Saree",
    origin: "Maharashtra",
    category: "Textiles",
    significance: "Maharashtra's most precious textile heritage, once valued on par with gold.",
    speciality: "Handwoven with interlocking weave technique creating distinctive peacock and flower motifs in the pallu.",
    history: "Named after Paithan town in Aurangabad, this art form is over 2,000 years old. It was mentioned in the accounts of Roman historian Pliny. Under the Peshwas, Paithanis were worth their weight in gold.",
    description: "A Paithani saree is Maharashtra's crown jewel. Its silk shimmers with the distinctive interplay of contrasting warp and weft threads, while the pallu (end piece) explodes in an elaborate tableau of peacocks and vines.",
    facts: ["The most expensive Paithanis historically cost as much as gold of the same weight", "A single saree can take 18 months to 3 years to weave", "The interlock weave means the pallu looks identical on both sides"]
  },
  {
    id: "pochampally",
    name: "Pochampally Ikat",
    origin: "Telangana",
    category: "Textiles",
    significance: "Known as the 'Ikat' capital of India, recognized by UNESCO for its distinctive double-ikat weaving.",
    speciality: "Complex resist-dyeing technique where patterns are dyed into threads before weaving, creating a characteristic blurred edge.",
    history: "The village of Pochampally in Telangana has been a weaving center for centuries. The ikat technique involves dyeing patterns into the yarn before it is woven, requiring extraordinary precision and planning.",
    description: "The geometric patterns of Pochampally Ikat seem to vibrate with energy, their edges softly blurred by a dyeing technique that requires visualizing the final pattern before a single thread is woven.",
    facts: ["Patterns are dyed into threads before weaving — a reverse engineering of design", "UNESCO inscribed it on the Representative List of Intangible Cultural Heritage", "The 'blurred' edge of ikat patterns is considered a mark of handmade authenticity"]
  },
  {
    id: "muga-silk",
    name: "Muga Silk",
    origin: "Assam",
    category: "Textiles",
    significance: "The golden silk exclusive to Assam, one of the rarest and most expensive natural fibers in the world.",
    speciality: "Natural golden sheen that intensifies with every wash, produced only by the Antheraea assamensis silkworm.",
    history: "Muga silk production is exclusive to Assam for over 600 years. The word 'Muga' means yellowish in Assamese. It was historically reserved for royalty and its production was a closely guarded regional secret.",
    description: "Muga silk glows with a natural golden luminosity that no synthetic can replicate. This rarest of silks, produced only in Assam's unique climate, grows more beautiful with each washing — fabric that improves with age.",
    facts: ["The golden color is natural and never fades — it gets richer with washing", "Muga silkworms can only survive in Assam's specific climate", "It has been granted a GI (Geographical Indication) tag, protecting its origin"]
  },
  {
    id: "phulkari",
    name: "Phulkari",
    origin: "Punjab",
    category: "Textiles",
    significance: "Punjab's vibrant embroidery tradition, meaning 'flower work,' essential in Punjabi weddings and celebrations.",
    speciality: "Embroidered from the wrong side of coarse cotton cloth using silk threads, creating a dazzling surface.",
    history: "References to Phulkari appear in Waris Shah's 18th-century poem 'Heer Ranjha.' The craft was a social tradition where women would begin embroidering for their daughter's trousseau from the day of her birth.",
    description: "Phulkari is Punjab's joy made tangible — fields of flowers blooming in silk thread on cotton cloth. Mothers begin stitching from the wrong side of the fabric, and what emerges on the right is pure geometric magic.",
    facts: ["Traditionally worked from the wrong side of the fabric", "A 'Bagh' (fully covered Phulkari) can take over a year to complete", "The stitches are so dense that the base fabric becomes invisible"]
  },
  {
    id: "kota-doria",
    name: "Kota Doria",
    origin: "Rajasthan",
    category: "Textiles",
    significance: "A distinctive check-patterned fabric from Kota, known for its transparency and lightweight quality.",
    speciality: "Unique square-check pattern created by weaving together cotton and silk threads on special looms.",
    history: "Brought to Kota, Rajasthan by Mysore's weavers in the 17th century under the patronage of Rao Kishore Singh. The craft evolved uniquely in Rajasthan's climate, perfect for the desert heat.",
    description: "Like a gentle breeze captured in fabric, Kota Doria drapes with an ethereal lightness. Its distinctive check pattern, woven from cotton and silk, creates a translucent fabric perfect for Rajasthan's sun-drenched days.",
    facts: ["The fabric is so light that a 5-meter saree weighs only 300 grams", "The distinctive checks are called 'Khat' in local language", "Each saree passes through 8 different artisans before completion"]
  },
  {
    id: "sambalpuri",
    name: "Sambalpuri Saree",
    origin: "Odisha",
    category: "Textiles",
    significance: "Odisha's pride, known for its traditional ikat designs featuring the wheel (chakra) and shell (shankha) motifs.",
    speciality: "Double ikat technique where both warp and weft threads are tie-dyed before weaving.",
    history: "Originating from Sambalpur region of Odisha, this weaving tradition is over 400 years old. The iconic motifs — the wheel and the shell — are drawn from the Jagannath Temple tradition.",
    description: "In every Sambalpuri saree, you'll find the wheel and the shell — ancient symbols from the Jagannath tradition, woven through the complex double-ikat technique that makes each piece a triumph of planning and precision.",
    facts: ["The motifs are derived from the Jagannath Temple tradition", "Both warp and weft threads are dyed before weaving", "Received a Geographical Indication tag in 2006"]
  },

  // ── Music & Dance ──
  {
    id: "bharatanatyam",
    name: "Bharatanatyam",
    origin: "Tamil Nadu",
    category: "Music & Dance",
    significance: "One of the oldest classical dance forms in the world, originating in Tamil Nadu's temples over 2,000 years ago.",
    speciality: "Characterized by fixed upper torso, bent legs, intricate footwork, and elaborate hand gestures (mudras) and facial expressions.",
    history: "Originally performed by devadasis (temple dancers) in the temples of Tamil Nadu. The dance was nearly lost during British colonial rule but was revived in the 20th century by pioneers like Rukmini Devi Arundale and Balasaraswati.",
    description: "When a Bharatanatyam dancer strikes the aramandi position, centuries of tradition flow through her body. Every stamp of the foot echoes temple bells, every mudra speaks a language older than most civilizations.",
    facts: ["Uses 108 different hand gestures (mudras) from the Natya Shastra", "The distinctive makeup includes red-dyed feet representing connection to earth", "Was nearly extinct before being revived in the 1930s"]
  },
  {
    id: "kathak",
    name: "Kathak",
    origin: "Uttar Pradesh",
    category: "Music & Dance",
    significance: "North India's premier classical dance, born from ancient storytelling traditions of temple priests.",
    speciality: "Known for fast spins (chakkars), intricate footwork with ankle bells (ghungroos), and expressive storytelling through movement.",
    history: "Originating from the traveling bards (Kathakars) of North India, Kathak evolved through Hindu temple traditions and later absorbed Persian and Central Asian influences under the Mughal courts, creating a unique fusion.",
    description: "Kathak is a whirlwind of storytelling. From gentle narrative gestures to explosive spins that blur the dancer into motion, from the rhythmic thunder of 100 ankle bells to moments of perfect stillness — Kathak is pure dramatic poetry.",
    facts: ["Dancers can wear up to 200 ghungroos (ankle bells) on each foot", "A skilled dancer can perform up to 35 spins in a single sequence", "The three major gharanas (schools) are Lucknow, Jaipur, and Banaras"]
  },
  {
    id: "kuchipudi",
    name: "Kuchipudi",
    origin: "Andhra Pradesh",
    category: "Music & Dance",
    significance: "A classical dance-drama tradition from the village of Kuchipudi, combining pure dance with theatrical storytelling.",
    speciality: "Unique blend of dance and drama, including the famous brass plate dance where the dancer performs on the edges of a brass plate.",
    history: "Founded in the 17th century by the saint-scholar Siddhendra Yogi in the village of Kuchipudi. Originally performed only by Brahmin men, it was revolutionized in the 20th century when women were included.",
    description: "Kuchipudi is where dance becomes theater. Dancers shift between pure rhythmic brilliance and dramatic storytelling, sometimes performing the extraordinary feat of dancing on the rim of a brass plate while balancing a pot of water on their head.",
    facts: ["The famous 'Tarangam' involves dancing on a brass plate's rim", "Originally performed exclusively by male Brahmin performers", "Dancers sometimes balance a pot of water on their head while dancing on the plate"]
  },
  {
    id: "odissi",
    name: "Odissi",
    origin: "Odisha",
    category: "Music & Dance",
    significance: "One of the oldest surviving dance forms, with evidence in the 2nd-century BCE caves of Udayagiri.",
    speciality: "Distinguished by the tribhanga (three-bend) posture and fluid, sculptural movements that mirror temple carvings.",
    history: "Odissi's origins can be traced to the 2nd century BCE through archaeological evidence. It was performed in the temples of Odisha, particularly the Sun Temple at Konark, whose walls are adorned with Odissi dance poses.",
    description: "An Odissi dancer embodies the sculptures of Konark come to life. The tribhanga posture — three graceful bends of head, torso, and knees — creates a living sculpture that flows like water from one position to another.",
    facts: ["The tribhanga posture deflects the body in three places — head, torso, and knee", "Dance poses on the Konark Sun Temple walls match modern Odissi positions exactly", "Archaeological evidence dates it to 2nd century BCE"]
  },
  {
    id: "kathakali",
    name: "Kathakali",
    origin: "Kerala",
    category: "Music & Dance",
    significance: "Kerala's spectacular dance-drama featuring elaborate costumes and the most complex facial makeup in any performing art.",
    speciality: "Elaborate facial makeup taking hours to apply, giant costumes, and intense facial expressions to convey emotions without words.",
    history: "Developed in the 17th century in Kerala, drawing from earlier art forms like Kutiyattam and Krishnanattam. The elaborate makeup system uses natural materials, with different colors representing different character types.",
    description: "Kathakali is theater at its most magnificent. Under massive headdresses and layers of makeup that take hours to apply, performers transform into gods, demons, and heroes, telling epic tales through eyes that speak louder than words.",
    facts: ["Makeup application takes 3-4 hours, with green for heroes and red for villains", "Performers train for 8-10 years before their first full performance", "The eye movements alone take years to master — performers can move each eye independently"]
  },
  {
    id: "manipuri",
    name: "Manipuri Dance",
    origin: "Manipur",
    category: "Music & Dance",
    significance: "A classical dance form known for its gentle, lyrical movements depicting the Ras Lila of Krishna and Radha.",
    speciality: "Extremely graceful, flowing movements with no sharp edges or sudden jerks, creating a dreamlike quality.",
    history: "Rooted in the ancient rituals of Manipur's Meitei community, the dance gained classical recognition through Rabindranath Tagore, who was so enchanted by it that he introduced it at Shantiniketan.",
    description: "Manipuri dance is grace made visible. Dancers seem to float rather than move, their cylindrical costumes swaying like bells as they enact the divine love story of Radha and Krishna in movements soft as silk.",
    facts: ["Rabindranath Tagore was instrumental in bringing it to national attention", "The feet never strike the ground hard — all movements are soft and flowing", "The cylindrical drum skirt (Potloi) can weigh up to 20 kg"]
  },
  {
    id: "mohiniyattam",
    name: "Mohiniyattam",
    origin: "Kerala",
    category: "Music & Dance",
    significance: "The 'Dance of the Enchantress,' a graceful classical dance form performed predominantly by women.",
    speciality: "Characterized by swaying body movements reminiscent of swaying palms and ocean waves of Kerala.",
    history: "References to Mohiniyattam date back to the 16th century. It nearly became extinct during British rule but was revived by the poet Vallathol Narayana Menon in the 1930s through the Kerala Kalamandalam.",
    description: "Mohiniyattam is Kerala's gentle poetry — a dance of swaying palms, rolling waves, and feminine grace. Every movement flows like water, capturing the landscape of Kerala in the dancer's body.",
    facts: ["The name means 'Dance of the Enchantress' — after the mythological Mohini avatar of Vishnu", "The white and gold costume represents purity and prosperity", "It was nearly extinct before revival in the 1930s"]
  },
  {
    id: "sattriya",
    name: "Sattriya",
    origin: "Assam",
    category: "Music & Dance",
    significance: "A 500-year-old classical dance created by the great Assamese saint Srimanta Sankardev.",
    speciality: "Combines dance, drama, and music in a devotional form celebrating Krishna, with both male and female styles.",
    history: "Created in the 15th century by Srimanta Sankardev as part of the Neo-Vaishnavite movement. It was performed exclusively in Assam's satras (monasteries) for centuries before gaining classical status in 2000.",
    description: "Born in the monasteries of Assam, Sattriya carries the devotional fire of saint Sankardev. Its dancers move with a restrained grace, their every gesture an offering to Krishna, preserving a 500-year-old sacred tradition.",
    facts: ["Recognized as a classical dance form only in 2000 — the youngest to receive the status", "Was exclusively performed by monks in monasteries for over 500 years", "Srimanta Sankardev created it as a tool for spiritual education"]
  },
  {
    id: "chhau",
    name: "Chhau Dance",
    origin: "Jharkhand",
    category: "Music & Dance",
    significance: "A semi-classical martial dance form inscribed on UNESCO's Intangible Cultural Heritage list.",
    speciality: "Combines martial arts, tribal dance, and storytelling with elaborate masks (in the Purulia and Seraikella styles).",
    history: "Originating in the tribal-martial traditions of eastern India, Chhau has three distinct styles: Seraikella (Jharkhand), Purulia (West Bengal), and Mayurbhanj (Odisha). It traditionally portrays battles between good and evil.",
    description: "When Chhau dancers leap into the air in their elaborate masks, myth becomes tangible. This martial dance blends combat movements with grace, creating spectacular performances where gods and demons battle under open skies.",
    facts: ["UNESCO inscribed it on its list of Intangible Cultural Heritage in 2010", "Seraikella masks are so iconic they've been exhibited in museums worldwide", "Performances traditionally happen at night during the Chaitra Parva festival"]
  },
  {
    id: "garba",
    name: "Garba",
    origin: "Gujarat",
    category: "Music & Dance",
    significance: "Gujarat's iconic folk dance celebrating Goddess Durga during Navratri, now a global cultural phenomenon.",
    speciality: "Performed in concentric circles around a lamp or image of the Goddess, with rhythmic clapping and spinning.",
    history: "Garba originated as a devotional dance honoring the feminine form of divinity. The dance around the central lamp symbolizes the Hindu concept of time moving in cycles. During Navratri, entire cities in Gujarat dance Garba for nine consecutive nights.",
    description: "When Navratri arrives, Gujarat transforms. Millions swirl in concentric circles, clapping and spinning to accelerating rhythms. Garba is democracy of dance — every age, every class, moving together in celebration of the divine feminine.",
    facts: ["The circular formation represents the cycle of life — from birth to death to rebirth", "Some Navratri Garba events in Gujarat attract over 30,000 dancers", "Modern Garba has evolved to include Bollywood and electronic music fusion"]
  },

  // ── Craftsmanship ──
  {
    id: "blue-pottery",
    name: "Blue Pottery",
    origin: "Rajasthan",
    category: "Craftsmanship",
    significance: "Jaipur's signature craft, recognized worldwide for its distinctive blue-and-white aesthetic.",
    speciality: "Made without clay — uses quartz stone powder, glass, and chemicals. The iconic blue comes from cobalt oxide.",
    history: "Originally a Persian craft that came to India via Mughal courts in the 14th century. It was revived in Jaipur in the mid-20th century by Kripal Singh Shekhawat, who adapted traditional Mughal designs into a contemporary art form.",
    description: "The ethereal blue of Jaipur's pottery floats between sky and sea. Unlike traditional pottery, it uses no clay — just ground quartz, glass, and a recipe that transforms humble materials into objects of extraordinary beauty.",
    facts: ["Contains no clay — made from quartz stone powder, glass, and chemicals", "The blue color comes from cobalt oxide imported from Persia", "Kripal Singh Shekhawat single-handedly revived this dying art in the 1960s"]
  },
  {
    id: "bidriware",
    name: "Bidriware",
    origin: "Karnataka",
    category: "Craftsmanship",
    significance: "A unique metal craft from Bidar, Karnataka, known for its striking black and silver appearance.",
    speciality: "Silver inlay on a blackened alloy of zinc and copper, creating dramatic contrast. The soil of Bidar fort is essential to the process.",
    history: "Developed in the 14th century during the Bahmani Sultanate in Bidar. The craft gets its distinctive black color from a special soil found only in the Bidar Fort, mixed with ammonium chloride.",
    description: "Bidriware is alchemy made beautiful. A secret soil from the ancient Bidar Fort blackens metal to a deep, velvety darkness against which silver patterns gleam like stars. No other craft in the world uses this technique.",
    facts: ["The blackening soil is found only within the walls of Bidar Fort", "The exact composition of the alloy is a closely guarded family secret", "Persian, Turkish, and Hindu motifs coexist in the designs"]
  },
  {
    id: "wood-carving",
    name: "Kashmiri Wood Carving",
    origin: "Jammu & Kashmir",
    category: "Craftsmanship",
    significance: "Kashmir's legendary wood carving tradition, adorning houseboats, temples, and homes for over 600 years.",
    speciality: "Intricate patterns carved into walnut wood, featuring designs of chinar leaves, lotus flowers, and Persian arabesques.",
    history: "Introduced to Kashmir by Sultan Zain-ul-Abidin in the 15th century, who brought artisans from Samarkand. The craft uniquely blends Central Asian and Indian motifs, with walnut wood providing the perfect medium.",
    description: "Kashmir's walnut wood carries the soul of the Valley. Master carvers transform solid timber into lace-like screens and furniture so intricately worked that flowers seem to bloom from the grain itself.",
    facts: ["Kashmiri walnut wood is among the finest carving wood in the world", "A single room-divider screen can take a year to carve", "The craft was introduced by artisans from Samarkand in the 15th century"]
  },
  {
    id: "stone-sculpture",
    name: "Stone Sculpture",
    origin: "Rajasthan",
    category: "Craftsmanship",
    significance: "A tradition that created some of the world's finest temple sculptures and continues in Rajasthan today.",
    speciality: "Hand-carved from marble and sandstone using techniques unchanged for centuries, from delicate jali work to massive temple panels.",
    history: "India's stone carving tradition produced the temples of Khajuraho, Konark, and Ranakpur. Rajasthan's marble and sandstone quarries have supplied sculptors for millennia, with the tradition continuing unbroken in towns like Makrana and Dungarpur.",
    description: "From the same quarries that yielded stone for the Taj Mahal, Rajasthani sculptors continue an unbroken tradition of transforming raw rock into delicate lace-like screens and divine figures of extraordinary detail.",
    facts: ["Makrana marble, used for the Taj Mahal, is still quarried and carved", "The jali (perforated screen) technique allows light to filter through solid stone", "Some temple carvings are so fine they appear machine-made, but are entirely handcrafted"]
  },
  {
    id: "metal-craft",
    name: "Dhokra Metal Craft",
    origin: "Chhattisgarh",
    category: "Craftsmanship",
    significance: "One of the oldest metal casting techniques in the world, using the lost-wax (cire perdue) method.",
    speciality: "Hollow metal sculptures created using beeswax threads, giving each piece a distinctive rough, earthy texture.",
    history: "The Dhokra technique is over 4,000 years old — the famous 'Dancing Girl' of Mohenjo-daro was made using this method. Today, tribal artisans in Chhattisgarh, West Bengal, and Odisha continue this ancient tradition.",
    description: "Each Dhokra piece connects you to 4,000 years of human creativity. The lost-wax method produces figures with a distinctive rough beauty — no two identical, each carrying the thumbprints of its maker in the textured bronze surface.",
    facts: ["The Mohenjo-daro 'Dancing Girl' (2500 BCE) was made with this technique", "No two pieces are identical — the wax mold is destroyed in each casting", "The distinctive textured surface comes from wax threads wrapped around a clay core"]
  },
  {
    id: "cane-craft",
    name: "Cane & Bamboo Craft",
    origin: "Assam",
    category: "Craftsmanship",
    significance: "Northeast India's most iconic craft tradition, integral to daily life and cultural identity.",
    speciality: "Intricate weaving of bamboo and cane into everything from furniture to musical instruments, using techniques passed through generations.",
    history: "Bamboo and cane crafts have been central to Northeast Indian life for millennia. Every household in Assam traditionally had bamboo items, from grain storage to musical instruments. The craft reflects a deep understanding of this remarkable grass.",
    description: "In Assam, bamboo is not just a material — it is life itself. From cradles to granaries, from rain shelters to musical instruments, the cane and bamboo weavers of the Northeast transform nature's strongest grass into objects of surprising delicacy.",
    facts: ["Bamboo grows up to 35 inches per day — one of the fastest-growing plants", "Over 60% of India's bamboo grows in the Northeast", "Traditional bamboo houses in Assam can withstand earthquakes better than concrete"]
  },
  {
    id: "glass-work",
    name: "Firozabad Glass Work",
    origin: "Uttar Pradesh",
    category: "Craftsmanship",
    significance: "India's glass capital, producing the iconic glass bangles that are essential to Indian bridal traditions.",
    speciality: "Handblown and handmade glass products, especially bangles, created at temperatures exceeding 700°C.",
    history: "Firozabad has been India's glass-making center for over 200 years. The city produces over 10 crore bangles daily, employing hundreds of thousands of artisans in a craft that transforms sand into shimmering adornment.",
    description: "In the furnaces of Firozabad, sand transforms into shimmer. Millions of glass bangles are born here daily, each one spun by hand from molten glass, carrying forward a tradition that makes this city glow with color.",
    facts: ["Firozabad produces over 100 million glass bangles every day", "Artisans work with molten glass at temperatures above 700°C", "The city is responsible for 70% of India's total glass production"]
  },
  {
    id: "zari-work",
    name: "Zari Work",
    origin: "Gujarat",
    category: "Craftsmanship",
    significance: "The art of weaving gold and silver threads into fabric, essential to India's bridal and ceremonial textiles.",
    speciality: "Real gold or silver is drawn into fine wires, flattened, and woven or embroidered into fabric to create lustrous patterns.",
    history: "Zari work has been practiced in India for over 400 years, with major centers in Surat and Varanasi. The craft requires drawing precious metals into wires thinner than human hair, then weaving them into intricate patterns.",
    description: "Zari transforms fabric into treasure. Real gold and silver, drawn thinner than a human hair, are woven into silk and velvet, creating textiles that shimmer with the warmth of precious metal — wearable gold.",
    facts: ["Traditional zari used real gold wire — now mostly replaced by copper-gold alloy", "A single gold zari thread can be drawn to over 1,600 meters", "Surat in Gujarat is the zari capital of India"]
  },
  {
    id: "leather-craft",
    name: "Leather Craft",
    origin: "Rajasthan",
    category: "Craftsmanship",
    significance: "Rajasthan's traditional leather craft, known for handmade juttis (footwear) and embossed leather goods.",
    speciality: "Hand-stitched leather products using vegetable tanning, embossed and painted with traditional Rajasthani motifs.",
    history: "Rajasthan's leather craft tradition dates back to the Indus Valley Civilization. The iconic Rajasthani jutty (leather shoe) is hand-stitched and decorated with intricate embroidery, mirrorwork, and even semi-precious stones.",
    description: "Rajasthan's leather artisans practice a craft that the Indus Valley knew 5,000 years ago. Their juttis and mojaris are not just footwear — they are canvases of embroidery, mirrorwork, and color that tell stories with every step.",
    facts: ["A pair of heavily embroidered royal juttis can take two weeks to make", "Vegetable tanning uses natural tree bark extracts — an eco-friendly process", "Jodhpur and Jaipur are the main centers of traditional leather craft"]
  },
  {
    id: "terracotta",
    name: "Terracotta Art",
    origin: "West Bengal",
    category: "Craftsmanship",
    significance: "One of humanity's oldest art forms, with Indian terracotta traditions dating back to the Indus Valley Civilization.",
    speciality: "Unglazed clay sculpted and fired to create distinctive reddish-brown pottery, sculptures, and temple panels.",
    history: "India's terracotta tradition spans 5,000 years, from the Indus Valley figurines to the magnificent terracotta temples of Bishnupur in Bengal. The art continues in Bankura, where artisans create the iconic Bankura horse and temple panels.",
    description: "From the oldest civilization in the subcontinent to today's village artisan, terracotta has been India's democratic art — earth transformed by fire into beauty. The Bankura horse, with its elegant elongated neck, is its most iconic creation.",
    facts: ["The Bankura horse is one of India's most recognizable craft symbols", "Bishnupur's terracotta temples are UNESCO World Heritage candidates", "The famous 'Mother Goddess' figurines of the Indus Valley are terracotta"]
  },
];

export function getItemsByCategory(category: Category): HeritageItem[] {
  return heritageItems.filter(item => item.category === category);
}

export function getItemsByState(state: string): HeritageItem[] {
  return heritageItems.filter(item => item.origin === state);
}

export function getItemById(id: string): HeritageItem | undefined {
  return heritageItems.find(item => item.id === id);
}

export function searchItems(query: string): HeritageItem[] {
  const q = query.toLowerCase();
  return heritageItems.filter(item =>
    item.name.toLowerCase().includes(q) ||
    item.origin.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q)
  );
}

export function getRecommendations(currentItem: HeritageItem, count = 4): HeritageItem[] {
  const sameCat = heritageItems.filter(i => i.category === currentItem.category && i.id !== currentItem.id);
  const sameState = heritageItems.filter(i => i.origin === currentItem.origin && i.id !== currentItem.id && i.category !== currentItem.category);
  const combined = [...sameCat, ...sameState];
  const unique = Array.from(new Map(combined.map(i => [i.id, i])).values());
  return unique.slice(0, count);
}
