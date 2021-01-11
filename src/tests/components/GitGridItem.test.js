import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("<GifGridItem />", () => {

    const id = "1";
    const title = "Un titulo";
    const url = "https://localhost/algo.jpg";

    const wrapper = shallow(
        <GifGridItem
            title={title}
            url={url}
        />
    );

    test("Should match Snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have a p tag with title', () => {
        const p = wrapper.find("p");
        
        expect(p.text().trim()).toBe( title );
    });

    test('should have image same as props url and alt as title', () => {
        const img = wrapper.find("img");
        
        expect(img.props().src).toBe( url );
        expect(img.props().alt).toBe( title );
    });
    
    test('should have animate__fadeIn Class', () => {
        const div = wrapper.find(".animate__fadeIn");

        expect(div).toHaveLength(1);
    });
});