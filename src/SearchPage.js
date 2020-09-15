import React from "react";
import "./SearchPage.css";
import SearchResult from './SearchResult';
import { Button } from "@material-ui/core";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>
          62 stays <span dangerouslySetInnerHTML={{ __html: "&middot;" }} /> 26 august to 30 august{" "} 
          <span dangerouslySetInnerHTML={{ __html: "&middot;" }} /> 2 guest
        </p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/c4fbae76-f8ab-492f-932b-6761acf554a5.jpg?aki_policy=x_large"
        location="Private room in center of Austin"
        title="Stay at this spacious modern house"
        description="11 guests - 5 bedrooms - 4 bathrooms - Wifi - Free Parking"
        star={4.73}
        price="$350 / night"
        total="$700 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/3a639399-5bfb-4271-8973-38f29f6fa882.jpg?aki_policy=x_large"
        location="Entire loft in Barton Hills"
        title="Modern Loft in the Heart of Austin"
        description="2 guests - 1 bedroom - 2 bathrooms - Wifi - Free Parking"
        star={4.73}
        price="$104 / night"
        total="$208 total"
      />{" "}
      <SearchResult
        img="https://a0.muscache.com/im/pictures/cd8f5851-10be-44b6-a025-cf9d74c00fb6.jpg?aki_policy=x_large"
        location="Entire apartment in Highland"
        title="Close to Everything | Business Travelers Welcome"
        description="3 guests - 1 bedroom - 1 bathroom - Wifi - Free Parking"
        star={4.73}
        price="$77 / night"
        total="$154 total"
      />{" "}
      <SearchResult
        img="https://a0.muscache.com/4ea/air/v2/pictures/2cad5f9c-7187-43f9-85b3-37add3016af0.jpg?t=r:w1200-h720-sfit,e:fjpg-c90"
        location="Entire bungalow in Barton Hills"
        title="Mid-Century Mod Treehouse near Zilker Park"
        description="4 guests - 2 bedrooms - 1 bathroom - Wifi - Free Parking"
        star={4.73}
        price="$120 / night"
        total="$240 total"
      />{" "}
      <SearchResult
        img="https://a0.muscache.com/im/pictures/8de97134-02e5-4445-98a1-e50f4d45f272.jpg?aki_policy=x_large"
        location="Entire house in Dawson"
        title="Bright and Modern SoCo Retreat, Minutes from Downtown"
        description="6 guests - 5 bedrooms - 2 bathrooms - Wifi - Free Parking"
        star={4.73}
        price="$201 / night"
        total="$402 total"
      />
    </div>
  );
}

export default SearchPage;
