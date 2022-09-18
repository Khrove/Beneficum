import { Locator, Page } from "@playwright/test";

export const SubHeaderComp = (page: Page) => {
    const _page: Page = page;
    const _levelDropdown = _page.locator('[aria-controls="menu-courses"] span:nth-child(2) span');

    return {
        levelDropdown: () => { return _levelDropdown; },
        getLevelDropdownItem: (item: string) => {
            return _page.locator('[role="menuitem"] span[class*="Prefix"]', { hasText: `${item}` });
        }
    }
}