import React from 'react';

export default function HomeContainer() {

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
    var date = new Date();

    return(
        <main className="w-100 cf helvetica dark-gray bg-white center">
            <div className="fl w-50 pr2 pr3-l mb3 mb4-l">
            <div className="cover pv5 pv6-m pv7-l" style={{background:'black center', backgroundImage: `url('http://mrmrs.github.io/photos/v/022.jpg')`}}></div>
            </div>
            <div className="fl w-50 w-25-l pl2 pr2-m ph2-l mb3 mb4-l">
            <div className="cover pv5 pv6-m pv7-l" style={{background:'black center', backgroundImage: `url('http://mrmrs.github.io/photos/v/024.jpg')`}}> </div>
            </div>
            <div className="fl w-50 w-50 w-25-l pr2 pr0-l pl3-l mb3 mb4-l">
                <div className="cover pv5 pv6-m pv7-l" style={{background:'black left', backgroundImage: `url('http://mrmrs.github.io/photos/050.jpg')`}}> </div>
            </div>
            <div className="fl w-50 w-50 w-25-l pl2 pl0-l pr2-m pr4-l mb3 mb4-l">
            <div className="cover pv5 pv6-m pv7-l" style={{background:'black center', backgroundImage: `url('http://mrmrs.github.io/photos/049.jpg')`}}> </div>
            </div>
            <div className="fl w-100 w-50-l pr2-l pl2-ns mb4 mb0-l mb4 outline">
            <div className="pa4">
                <h1 className="f4 f2-l fw7 mt0 pt3-l pb4-l bb-l bb--black">{months[date.getMonth()] + ' ' + new Date().getDate() + ', ' + date.getFullYear()}</h1>
                <p className="lh-copy mt2 mt3-m mt5-l f6">
                <span className="db-ns f6 fw7 lh-solid mb3 mb0-m mb4-l">Today's headline:</span> 
                <span className="fw9 f6 f1-l db lh-title mb3 mb4-l">“Berkshire Hathaway nearing the maximum stock price of $429,496 allowed on the Nasdaq.”</span>
                </p>
            </div>
            </div>
            <div className="cf">
            <div className="fl w-100 w-25-l pl3-l mb3 mb4-l">
                <div className="cover pv5 pv6-m pv7-l" style={{background:'black center', backgroundImage: `url('http://mrmrs.github.io/photos/051.jpg')`}}> </div>
            </div>
            <div className="fl w-100 w-25-l pr3-l">
                <p className="lh-copy measure f6 pt3 pt0-l mt0 mb3 mb4-l center">
                <span className="fw6">For us Graphic Design is “organization of information.”</span> There are other
                types of graphic design more concerned with illustration or of a
                narrative nature.  Nothing could be more useful to reach our intention
                than the Grid. The grid represents the basic structure of our graphic
                design, it helps to organize the content, it provides consistency, it
                gives an orderly look and it projects a level of intellectual elegance
                that we like to express.  There are in nite kinds of grids, but just
                one - the most appropriate - for any problem. Therefore, it becomes
                important to know which kind of grid is the most appropriate. The basic
                understanding is that the smaller the module of the grid the least
                helpful it could be. We could say that an empty page is a page with an
                in nitesimal small grid. Therefore, it is equivalent to not being
                there. Conversely a page with a coarse grid is a very restricting grid
                offering too few alternatives. The secret is to  nd the proper kind of
                grid for the job at hand. Sometimes, in designing a grid we want to
                have the outside margins small enough to provide a certain tension
                between the edges of the page and the content. After that we divide the
                page in a certain number of columns according to the content, three,
                two, four,  ve, six, etc. Columns provide only one kind of consistency,
                but we also need to have an horizontal frame of reference to assure
                certain levels of continuity throughout the publication. Therefore, we
                will divide the page from top to bottom in a certain number of Modules,
                four, six, eight, or more, according to size and need. Once we have
                structured the page, we will begin to structure the information and
                place it in the grid in such a way that the clarity of the message will
                be enhanced by the placement of the text on the grid. There are in nite
                ways of doing this and that is why the grid is a useful tool, rather
                than a constricting device. 
                </p>
            </div>
            
            <div className="fl w-100 w-75-l pv0 mv0">
                <div className="fl w-100 mb2 mb4-l">
                <div className="cover pv5 pv6-l" style={{background:'black center', backgroundImage: `url('http://mrmrs.github.io/photos/u/001.jpg')`}}> </div>
                </div>
                <div className="fl w-25 mb2 mb4-l">
                <div className="cover pv5 pv6-m pv7-l" style={{background:'black center', backgroundImage: `url('http://mrmrs.github.io/photos/u/002.jpg')`}}> </div>
                </div>
                <div className="fl w-75 pl2 pl4-l mb2 mb4-l">
                <div className="cover pv5 pv6-m pv7-l" style={{background:'black center', backgroundImage: `url('http://mrmrs.github.io/photos/u/003.jpg')`}}> </div>
                </div>
                <div className="fl w-100 mb2 mb4-l">
                    <div className="cover pv5 pv6-ns" style={{background:'black center', backgroundImage: `url('http://mrmrs.github.io/photos/u/004.jpg')`}}> </div>
                </div>
            </div>
            </div>
        </main>
    )
}
