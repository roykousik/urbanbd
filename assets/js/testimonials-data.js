/* =========================================================
   HOW TO ADD A REVIEW
   1. Save the client's photo in assets/testimonial/ as a square PNG.
      Name it after the client, lowercase, hyphens, no titles:
      "Rina Khan" -> rina-khan.png   |   "Dr. Nasir Uddin" -> nasir-uddin.png
   2. Copy one block below, paste it at the TOP of the list, edit the values.
   3. rating: copy one of these lines (stars only, no numbers):
        rating: "★★★★★"   -> 5 stars
        rating: "★★★★½"   -> 4.5 stars
        rating: "★★★★"    -> 4 stars
        rating: "★★★½"    -> 3.5 stars
      Leave rating out to hide the stars.
   4. Give every review a unique id ("t4", "t5", ...).
   5. Optional: photo: "assets/testimonial/custom-name.png" overrides the automatic name match.
   ========================================================= */

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Dr. Shayla Amin",
    role: "Client, URBAN Interior BD",
    rating: "★★★★★",
    quote: "I've been an URBAN INTERIOR BD fan for years. You can trust them for both quality and style."
  },
  {
    id: "t2",
    name: "Manir Uddin Ahmed",
    role: "Director & Chief Designer, URBAN Interior BD",
    rating: "★★★★★",
    quote: "I'm an interior designer, and my clients love URBAN INTERIOR BD. My designs are elegant, functional, and durable."
  },
  {
    id: "t3",
    name: "Dr. Md. Abdullah Al Mamun",
    role: "Client, URBAN Interior BD",
    rating: "★★★★½",
    quote: "Aesthetic design and flawless craftsmanship. URBAN INTERIOR BD has the quality of clients satisfactions."
  }
];
