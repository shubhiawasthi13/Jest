import {render, screen } from '@testing-library/react';
import SnapFile from '../SnapFile';

test("snapshot testing case", () => {
    const container = render(<SnapFile/>)
    expect(container).toMatchSnapshot()
})