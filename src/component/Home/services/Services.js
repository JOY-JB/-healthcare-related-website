import { Row } from 'react-bootstrap';
import useService from '../../../hooks/useService';
import Service from '../Service/Service';

const Services = () => {
    const services = useService()
    // console.log(services);
    return (
        <div className="text-center py-3" id="services">
            <h5>Service we provide</h5>
            <h1 className="display-3">Our Services</h1>

            <Row xs={1} md={3} className="container mx-auto g-4 mt-3">

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;