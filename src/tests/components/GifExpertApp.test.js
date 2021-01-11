import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../../GifExpertApp";

describe('<GifExpertApp />', () => {
    const wrapper = shallow(
        <GifExpertApp />
    );

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should display a category list', () => {
        const categories = ["Man of Steel", "Dark Knight"];
        const wrapper = shallow(
            <GifExpertApp defaultCategories={categories}/>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find("GifGrid") ).toHaveLength(2);

    })
    
})
