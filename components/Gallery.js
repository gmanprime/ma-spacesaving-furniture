import { Component } from "react";

// style imports
import styles from "../styles/Gallery.module.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="gallery" className={styles.Wrapper}>
        <div className={styles.content}>
          <h2 className={`${styles.sub_title} subTitle`}>Our products</h2>
        </div>
      </div>
    );
  }
}

export default Gallery;
