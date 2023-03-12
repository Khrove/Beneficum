import { Locator, Page } from "@playwright/test";
import { ClickablePri } from "../../primary/Clickable.pri";

export const SubHeaderComp = (page: Page) => {
    const _page: Page = page;
    const _levelDropdown = _page.locator('[aria-controls="menu-courses"] span:nth-child(2) span');

    return {
        levelDropdown: () => { return _levelDropdown; },
        getLevelDropdownItem: (item: string) => {
            return new ClickablePri(_page.locator(`li[class*="NavMenu"] a[data-dp-analytics-id$="em2.g${item}"]`), _page);
        }
    }
}