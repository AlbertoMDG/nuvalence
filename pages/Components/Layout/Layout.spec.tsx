import { render, screen } from '@testing-library/react';

import Layout from './Layout';



describe('Layout component', () => {
    it('renders correctly', () => {
        render(<Layout><div>Test Child</div></Layout>);


        expect(screen.getByAltText('Logo')).toBeInTheDocument();
        expect(screen.getByText('Address Book')).toBeInTheDocument();
        expect(screen.getByText('Test Child')).toBeInTheDocument();
    });
});
