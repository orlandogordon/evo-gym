import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setIsMenuToggled?: (value: boolean) => void;
  isMenuToggled?: boolean;
};

function Link({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled = () => null,
  isMenuToggled = false,
}: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-secondary-500" : ""} 
                transition duration-500 hover:text-secondary-400
            `}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        if (isMenuToggled) setIsMenuToggled(!isMenuToggled);
      }}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
