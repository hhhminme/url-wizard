import { Bold, VerticalSpace, Text } from "@create-figma-plugin/ui";
import { h } from "preact";
import styles from "./header.css";

export default function Header() {
  return (
    <div>
      <VerticalSpace space="large" />
      <Text align="center">
        <Bold className={styles.header}>URL Wizard 🧙‍♂️</Bold>
      </Text>
    </div>
  );
}
