import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { describe, it, expect } from 'vitest';

describe('Footer component', () => {

    it('renders the AppBar component', () => {
        render(<Footer />);
        // AppBar renders as a <header> by default in MUI
        const appBar = screen.getByRole('banner');
        expect(appBar).toBeInTheDocument();
    });

    it('has the correct class on the <footer> element', () => {
        render(<Footer />);
        const footer = screen.getByRole('contentinfo');
        expect(footer).toHaveClass('footer');
    });
});