
export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurFacilities = "ourfacilities",
    ContactUs = "contactus",
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

export interface FacilityType {
  name: string;
  description?: string;
  image: string;
}