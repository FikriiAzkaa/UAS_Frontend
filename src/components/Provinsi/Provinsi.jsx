import styles from "./Provinsi.module.css";
import Table from "../Table/Table";

function Provinsi(props) {
  const { title, subtitle, regions } = props;

  return (
    <div className={styles.container}>
      <h1 className={styles.provinsi__title}>{title}</h1>
      <h2 className={styles.provinsi__subtitle}>{subtitle}</h2>
      <section className={styles.provinsi}>
        <div className={styles.provinsi__table__data}>
          <table className={styles.provinsi__table} border={1}>
            <thead>
              <th>No</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Meninggal</th>
              <th>Dirawat</th>
            </thead>
            {regions.map((region, index) => {
              return (
                <Table
                  key={index}
                  no={index + 1}
                  region={region}
                  kota={region.kota}
                  kasus={region.kasus}
                  sembuh={region.sembuh}
                  meninggal={region.meninggal}
                  dirawat={region.dirawat}
                />
              );
            })}
          </table>
        </div>
      </section>
    </div>
  );
}

export default Provinsi;
