import React from "react";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";
import "@testing-library/jest-dom";

describe('<AddCategory />', () => {

    const setCategories = jest.fn();
    
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(
            <AddCategory 
                setCategories={setCategories}
            />
        );
    });

    test('should match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change textbox', () => {
        const input = wrapper.find("input");
        const value = "Hello World";

        input.simulate("change", {target: {value}});
        expect(wrapper.find("p").text().trim()).toBe(value);
    });
    
    test('should not post information in submit', () => {
        wrapper.find("form").simulate("submit", { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('should call setCategories and clean textbox', () => {
        const value = "Hello World";

        wrapper.find("input").simulate("change", { target: { value } });
        wrapper.find("form").simulate("submit", { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect(wrapper.find("input").props().value).toBe("");
    })
    
})
