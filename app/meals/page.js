import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function MealsData() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

async function Meals() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created
          <span className={styles.higlight}>by you</span>
        </h1>
        <p>
          Chose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href={"/meals/share"}>Share you favourite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        ↓
        <Suspense
          fallback={<p className={styles.loading}>Fetching Meals.....</p>}
        >
          <MealsData />
        </Suspense>
      </main>
    </>
  );
}

export default Meals;
