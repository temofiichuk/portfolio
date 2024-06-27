import styles from "./MainSidebar.module.scss";
import { RiGamepadFill, RiMacbookLine, RiPuzzleFill, RiTerminalBoxFill } from "@remixicon/react";

interface IMainSidebar {}

const MainSidebar = (props: IMainSidebar) => {
	return (
		<aside className={styles.aside}>
			<button aria-label="toogle additional sidebar" title="Toogle additional sidebar">
				<RiMacbookLine widths={20} className={"fill-icon-macbook"} />
			</button>
			<div className={styles.wrapper}>
				<button aria-label="open professional info" title="Open professional info">
					<RiTerminalBoxFill widths={20} className={"hover:fill-icon-professional-info"} />
				</button>
				<button aria-label="open personal info" title="Open personal info">
					<RiPuzzleFill widths={20} className={"hover:fill-icon-personal-info"} />
				</button>
				<button aria-label="open hobbies" title="Open hobbies">
					<RiGamepadFill widths={20} className={"hover:fill-icon-hobbies"} />
				</button>
			</div>
		</aside>
	);
};

MainSidebar.displayName = "MainSidebar";
export default MainSidebar;
