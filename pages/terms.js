import Head from 'next/head';
import { Row, Col, Form } from 'react-bootstrap';

/* components */
import TopBar from '@/components/topbar';
import Footer from '@/components/footer';

/* config */
import { APP_NAME } from '/environment';

const Terms = () => {
    return (
        <div className="wrapper">
            <Head>
                <title>{`${APP_NAME} | Terms And Conditions`}</title>
            </Head>

            <div className="top-bar">
                <TopBar />
            </div>


            <div className='policy-mainbx terms-conditions py-90'>
                <div className='container'>
                    <div className='card-header-box'>
                        <Row>
                            <Col lg={7} className="box1"> 
                            <h5>Current as of 20 Jan 2022</h5>
                                <h1>Terms and conditions</h1>
                                <h4 className='tabview-box'>
                                     By accessing our website, you are agreeing to be bound by these terms of service, and agree that you are responsible for compliance with any applicable local laws.
                                </h4> 
                                <div className='serchbox custm-serchbox'>
                                <Form.Control type="text" placeholder="Search" className="search" />
                                </div>
                            </Col>
                                <Col lg={5} className="box2 align-self-end" >
                                <h4 className='max-wt-380 deskview-box'>
                                     By accessing our website, you are agreeing to be bound by these terms of service, and agree that you are responsible for compliance with any applicable local laws.
                                </h4>   
                            </Col>
                        </Row>
                    </div>
                   
                </div>
            </div>
            
            <div className='content-decription-bx py-90'>
                <div className='container'>
                    <div className='custom-contain-sml mx-wt-720'>
                        <div className='description-card'>
                            <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit.
                                Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                            <p>
                                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at.
                                Suscipit tristique risus, at donec.In turpis vel et quam imperdiet.Ipsum molestie aliquet sodales id est ac volutpat. 
                            </p>
                            <h2>
                            What information do we collect?
                            </h2>
                            <p>
                                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae.
                                In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                            </p>
                            <p>
                                Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.
                                Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
                            </p>
                            <p>
                                Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci,
                                tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
                            </p>
                            <h2>How do we use your information?</h2>
                            <p>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae.
                                In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
                            <p>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.
                                Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.</p>
                            <p>
                            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
                            </p>
                            <h3>Do we use cookies and other tracking technologies?</h3>
                            <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.

                            </p>
                            <h3>How long do we keep your information?</h3>
                            <p>
                                Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a,
                                elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                            </p>
                            <h3>How do we keep your information safe?</h3>
                            <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.

                            </p>
                            <h2>What are your privacy rights?</h2>
                            <p>
                                Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a,
                                elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                            </p>
                            <h3>How can you contact us about this policy?</h3>
                            <p>Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt.
                                Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                            </p>
                            <ul className='listing-content'>
                                <li>Lectus id duis vitae porttitor enim <a>gravida morbi.</a></li>
                                <li>Eu turpis <a>posuere semper feugiat</a> volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                                <li>Suspendisse maecenas ac <a>donec scelerisque</a> diam sed est duis purus.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-main footer-maincard">
                <Footer hideLinks={true} showDiffLink={true} />
            </div>
        </div>
    )
}

export default Terms;