import { Page } from "playwright";
type Config = {
  /** URL to start the crawl */
  url: string;
  /** Pattern to match against for links on a page to subsequently crawl */
  match: string | string[];
  /** Selector to grab the inner text from */
  selector: string;
  /** Don't crawl more than this many pages */
  maxPagesToCrawl: number;
  /** File name for the finished data */
  outputFileName: string;
  /** Optional cookie to be set. E.g. for Cookie Consent */
  cookie?: { name: string; value: string };
  /** Optional function to run for each page found */
  onVisitPage?: (options: {
    page: Page;
    pushData: (data: any) => Promise<void>;
  }) => Promise<void>;
  /** Optional timeout for waiting for a selector to appear */
  waitForSelectorTimeout?: number;
};

export const config: Config = {
  url: "https://docs.soliditylang.org/en/v0.8.23/units-and-global-variables.html",
  match: "https://docs.soliditylang.org/en/v0.8.23/**",
  selector: `.wy-body-for-nav`,
  maxPagesToCrawl: 10,
  outputFileName: "output_solidity.json",
};
