import { Locator, Page } from "@playwright/test";
import { SubHeaderComp } from "../../composite/global/sub.header.comp";

export const GradeView = (page: Page) => {
    const _page: Page = page;
    const moduleTitle: Locator = _page.locator('.module-card span');
    const subHeaderComp = SubHeaderComp(page);

    return {
        url: () => { return '/explore/curricula/grade?' },
        moduleTitle: () => { return moduleTitle; },
        subHeaderComp: () => { return subHeaderComp; },
        getModuleTitleByText: (title: string) => {
            return _page.locator('.module-card span', { hasText: `${title}` });
        }
    }
}