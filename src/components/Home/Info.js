import React from 'react'
import Link from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Our story" />
                <div class="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus mi eu purus
                         blandit, id tincidunt justo pulvinar. Curabitur nec congue ex, a ultricies risus.
                          Morbi non venenatis odio. Cras justo urna, dictum ac diam ornare, egestas vestibulum
                           orci. Nam nec commodo orci, ac ullamcorper est. Aliquam vitae nibh nec mi euismod
                            efficitur. Nam pretium lectus lorem, nec ultrices nisi aliquam at. In hac habitasse
                             platea dictumst. Nulla sed urna sit amet erat placerat volutpat. Pellentesque 
                             habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                              Fusce a libero ac odio consequat ultrices. Pellentesque sit amet justo orci. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
