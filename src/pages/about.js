import '../styles/reset.css';
import '../styles/style.css';

const About = () => {

    // less 75 pixels to compensate for the navbar
    const windowHeight = document.documentElement.clientHeight;
  
    const styles = {
        div: {
          height: windowHeight
        }
    }

    // Bio import from non-react portfolio, PENDING COMPATABILITY PASS //
    const bio = document.getElementById('bio');

    const bioInj = [
        "motorcycle enthusiast",
        "long time gamer",
        "movie aficionado",
        "world class warlock",
        "prolific reader",
        "open source fanatic",
        "petrichor admirer",
        "netflix devotee",
        "parody partaker",
        "eternal optimist",
        "smogon sycophant",
        "amatuer archer",
    ];
    const colors = [
        "lightblue",
        "green",
        "lightgreen",
        "red",
        "orange",
        "pink"
    ];
    // Randomly Rotating <span> for Bio
    function bioInjection () {
        setInterval(function() {

            // Generate random value
            let i = Math.floor(Math.random() * colors.length);
            let j = Math.floor(Math.random() * bioInj.length);

            // Update <span> for Bio with content and style
            bio.setAttribute('style', 'color: ' + colors[i]);
            bio.innerText = bioInj[j] + " ";

        // Execute once every second
        },1000);
    }
    bioInjection();
    // Bio import from non-react portfolio, PENDING COMPATABILITY PASS //

    return (
        <section style={styles.div} class="about">
            <h1 className="about__heading">Jesse DE Jong</h1>
            <p className="about__script">web <a href="https://github.com/Jesse-DeJong" target="_target" alt="github link"><i class="fa-brands fa-github"></i></a> dev</p>
        
            <br></br>

            <p className="about__script">A nascent software engineer and <span id="bio"></span> looking to expand my coding skillset and create cool things</p>
            <p className="about__script">I am a Full Stack Web Developer with a diverse background in business, finance and government services. Bringing with me a broad set of transferable skills such as problem solving, taking initiative and high level communication with clients and customers alike; alongside a history of driving business objectives to achieve stakeholder outcomes.</p>
            <p className="about__script">I am now seeking to apply these well honed skills along with my newly developed technical skills to a field more suited to my interests and capabilities.</p>
        </section>
    )
}

export default About;