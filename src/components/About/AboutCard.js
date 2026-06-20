import React from "react";

function AboutCard() {
  return (
    <div className="about-card">
      <div className="about-meta">
        <p>Born, lives and works in Israel</p>
        <p><a href="mailto:Pnina.afik@gmail.com" className="about-email">Pnina.afik@gmail.com</a></p>
        <p>A multi-disciplinary artist</p>
        <p>Art graduate of Haifa University</p>
      </div>

      <div className="about-section-block">
        <h2 className="about-section-title">Selected Solo Exhibitions</h2>
        <div className="about-entries">
          <div className="about-entry">
            <span className="about-year">2026</span>
            <span className="about-desc">"Holding The Fragments" — Palazzo Mora, Venice (Part of Personal Structures Project running alongside the Art Biennale)</span>
          </div>
          <div className="about-entry">
            <span className="about-year">2024</span>
            <span className="about-desc">"Angel On Shore" — Cube 6 Gallery, Tel Aviv</span>
          </div>
          <div className="about-entry">
            <span className="about-year">2023–24</span>
            <span className="about-desc">"Where Did The Morning Disappear?" — Gan Shmuel Gallery</span>
          </div>
          <div className="about-entry">
            <span className="about-year">2021</span>
            <span className="about-desc">
              "Shadow Of Doubt" — Yavne Gallery<br />
              "Hiding Place" — N.D. Gallery, Ramat Gan<br />
              "Twilight" — Gallery On The Hill, Maitar
            </span>
          </div>
          <div className="about-entry">
            <span className="about-year">2018</span>
            <span className="about-desc">
              "Superposition" — Tova Osmann Gallery, Tel Aviv<br />
              "One By One" — Ein Hod Gallery, Ein Hod
            </span>
          </div>
        </div>
      </div>

      <div className="about-section-block">
        <h2 className="about-section-title">Selected Group Exhibitions</h2>
        <div className="about-entries">
          <div className="about-entry">
            <span className="about-year">2026</span>
            <span className="about-desc">"Conversation With A Tree" — Outdoor Exhibition</span>
          </div>
          <div className="about-entry">
            <span className="about-year">2025</span>
            <span className="about-desc">"Oh, I Am Dressed Up" — Outdoor Exhibition</span>
          </div>
          <div className="about-entry">
            <span className="about-year">2023</span>
            <span className="about-desc">
              "How To Vowelize" — Cube 6 Gallery, Tel Aviv<br />
              "In Real Time" — Cube 6 Gallery, Tel Aviv<br />
              "Here I Am" — Starta Arta Gallery, New York
            </span>
          </div>
          <div className="about-entry">
            <span className="about-year">2022</span>
            <span className="about-desc">"False Awakening" — Givat Haviva Gallery</span>
          </div>
          <div className="about-entry">
            <span className="about-year">2021</span>
            <span className="about-desc">"Roots" — Zurala Group Exhibition, Gallery On The Cliff, Netanya</span>
          </div>
          <div className="about-entry">
            <span className="about-year">2020</span>
            <span className="about-desc">
              "The New Attributes" — Rishon Lezion Artists House<br />
              "Corona Time" — Gan Shmuel Gallery<br />
              "Rorschach Is Alive And Dead In Tel Aviv" — Online Exhibition (Covid Days)
            </span>
          </div>
          <div className="about-entry">
            <span className="about-year">2019</span>
            <span className="about-desc">
              "Women Creators" — Castel Museum<br />
              "International Art Biennale" — Museum Of Modern Art, Barcelona<br />
              "Art Expo New York" — A Contemporary Art Show, New York, U.S.A<br />
              "Art San Diego" — A Contemporary Art Show, San Diego, USA<br />
              "Spectrum Miami" — Contemporary International Art Show, Miami, USA
            </span>
          </div>
        </div>
      </div>

      <div className="about-section-block">
        <h2 className="about-section-title">Selected Publications</h2>
        <div className="about-entries">
          <div className="about-entry about-entry-list">
            <span className="about-desc">
              Texture Magazine<br />
              Art International Contemporary Magazine 2019 (print magazine)<br />
              44 Degrees Online Art Magazine — 31st Edition — "There Are No Sweet Wars"<br />
              Landscape Art Review Online Magazine — 10th Edition — 24 page. Interview article published mid-September 2019
            </span>
          </div>
        </div>
      </div>

      <div className="about-section-block">
        <h2 className="about-section-title">Prizes</h2>
        <div className="about-entries">
          <div className="about-entry">
            <span className="about-year">2019</span>
            <span className="about-desc">International Velasquez Art Prize — Barcelona, Spain</span>
          </div>
        </div>
      </div>

      <div className="about-section-block">
        <h2 className="about-section-title">Main Working Positions</h2>
        <div className="about-entries">
          <div className="about-entry about-entry-list">
            <span className="about-desc">
              Art teacher at Mevo'ot Yam, high school<br />
              Art director of Netanya Municipality<br />
              Had established "Zurala", a group of 5 women artists of 5 different disciplines: painting, sculpture, photography, ceramic and multi discipline art.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
