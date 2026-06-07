import Card from "react-bootstrap/Card";


function AboutCard() {
  const sectionStyle = {
    display: "block",
    fontWeight: "bold",
    marginTop: "1em",
    marginBottom: "0.3em",
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify", color: "black", fontSize: "0.75em" }}>
            Born, lives and works in Israel
            <br />
            Pnina.afik@gmail.com
            <br />
            A multi-disciplinary artist
            <br />
            Art graduate of Haifa University
            <span style={sectionStyle}>Selected Solo Exhibitions</span>
            2026
            <br />
            <br />
            "Holding The Fragments"- Palazzo Mora, Venice (Part of Personal Structures Project running alongside the Art Biennale)
            <br />
            <br />
            2024
            <br />
            <br />
            "Angel On Shore"- Cube 6 Gallery, Tel Aviv
            <br />
            <br />
            2023-24
            <br />
            <br />
            "Where Did The Morning Disappear?"- Gan Shmuel Gallery
            <br />
            <br />
            2021
            <br />
            <br />
            "Shadow Of Doubt"- Yavne Gallery
            <br />
            "Hiding Place"- N.D. Gallery, Ramat Gan
            <br />
            "Twilight"- Gallery On The Hill, Maitar
            <br />
            <br />
            2018
            <br />
            <br />
            "Superposition"- Tova Osmann Gallery, Tel Aviv
            <br />
            "One By One"- Ein Hod Gallery, Ein Hod
            <span style={sectionStyle}>Selected Group Exhibitions</span>
            2026
            <br />
            <br />
            "Conversation With A Tree"- Outdoor Exhibition
            <br />
            <br />
            2025
            <br />
            <br />
            "Oh, I Am Dressed Up"- Outdoor Exhibition
            <br />
            <br />
            2023
            <br />
            <br />
            "How To Vowelize"- Cube 6 Gallery, Tel Aviv
            <br />
            "In Real Time"- Cube 6 Gallery, Tel Aviv
            <br />
            "Here I Am"- Starta Arta Gallery, New York
            <br />
            <br />
            2022
            <br />
            <br />
            "False Awakening"- Givat Haviva Gallery
            <br />
            <br />
            2021
            <br />
            <br />
            "Roots"- Zurala Group Exhibition, Gallery On The Cliff, Netanya
            <br />
            <br />
            2020
            <br />
            <br />
            "The New Attributes"- Rishon Lezion Artists House
            <br />
            "Corona Time"- Gan Shmuel Gallery
            <br />
            "Rorschach Is Alive And Dead In Tel Aviv"- Online Exhibition (Covid Days)
            <br />
            https://www.facebook.com/hanitaelizur/photos/rpp.103224641337792/114499426876980/?type=3&theater
            <br />
            <br />
            2019
            <br />
            <br />
            "Women Creators"- Castel Museum
            <br />
            "International Art Biennale"- Museum Of Modern Art, Barcelona
            <br />
            "Art Expo New York"- A Contemporary Art Show, New York, U.S.A
            <br />
            "Art San Diego"- A Contemporary Art Show, San Diego, USA
            <br />
            "Spectrum Miami"- Contemporary International Art Show, Miami, USA
            <span style={sectionStyle}>Selected Publications</span>
            - Texture Magazine
            <br />
            - Art International Contemporary Magazine 2019 (print magazine)
            <br />
            - 44 Degrees Online Art Magazine - 31st Edition- "There Are No Sweet Wars"
            <br />
            - Landscape Art Review Online Magazine- 10th Edition- 24 page. Interview article published mid-September 2019
            <span style={sectionStyle}>Prizes</span>
            2019- International Velasquez Art Prize – Barcelona, Spain
            <span style={sectionStyle}>Main Working Positions</span>
            <br />
            - Art teacher at Mevo'ot Yam, high school
            <br />
            - Art director of Netanya Municipality
            <br />
            - Had established "Zurala", a group of 5 women artists of 5 different disciplines: painting, sculpture, photography, ceramic and multi discipline art.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
