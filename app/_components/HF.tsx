import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

import styles from "./layout.module.css";

interface ChildrenInter {
  children: ReactNode;
}

export default function HF({ children }: ChildrenInter) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
