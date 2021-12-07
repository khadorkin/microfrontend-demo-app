import { TestComponent1 } from '@microfrontend-demo/design-system/components';
import { TenableIoComponent } from '@microfrontend-demo/tenable-io/common';

export function Landing() {
    return (
        <>
            <p>Landing Page</p>

            <TestComponent1 />
            <TenableIoComponent />
        </>
    );
}

export default Landing;