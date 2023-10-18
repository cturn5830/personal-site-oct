import styles from "@/styles/comp/work/MyProjects.module.css";
import data from "@/data/Projects.json";

export default function MyProjects({ bg }: { bg: any }) {
  function bgCheck() {
    if (bg) {
      return { background: "rgb(24, 24, 24)" };
    }
  }

  const Sites = data.Data.Sites;

  function Template({ site }: { site: any }) {
    return (
      <>
        <span className={styles.site}>
          <h4 className={styles.name}>{site.Name}</h4>
          <div className={styles.img}>
            <span className={styles.workType}>{site.Type} </span>
            Img Placeholder Background
            <span>
              <h4 className={styles.codeType}>{site.Code}</h4>
            </span>
          </div>
          <p className={styles.desc}>{site.Desc}</p>
        </span>
      </>
    );
  }

  return (
    <div style={bgCheck()} className={styles.MasterWrapper}>
      <section className={styles.wrapper}>
        <h2>Past Projects.</h2>
        <div className={styles.listWrapper}>
          {Sites &&
            Sites.length > 0 &&
            Sites.map((siteList) => <Template site={siteList} />)}
        </div>
      </section>
    </div>
  );
}
