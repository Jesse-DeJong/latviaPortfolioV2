import '../styles/reset.css';
import '../styles/style.css';

const Landing = () => {

    // less 75 pixels to compensate for the navbar
    const windowHeight = document.documentElement.clientHeight - 75;
  
    const styles = {
        div: {
          height: windowHeight
        }
    }

    return (
        <section style={styles.div} class="landing">
            <h1 class="landing__heading">Jesse DE Jong</h1>
            <p class="landing__script">web <a href="https://github.com/Jesse-DeJong" target="_target" alt="github link"><i class="fa-brands fa-github"></i></a> dev</p>
        </section>
    )
}

export default Landing;