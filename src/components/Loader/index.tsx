import React from "react";
import styles from "./index.module.scss";

import type { LoaderProps } from "@/utils/types";

export default function Loader({ text }: LoaderProps): JSX.Element {
	return (
		<div className={styles.loading}>
			<div className={styles.spinner}></div>
			{text && <div className={styles.loadingText}>{text}</div>}
		</div>
	);
}
