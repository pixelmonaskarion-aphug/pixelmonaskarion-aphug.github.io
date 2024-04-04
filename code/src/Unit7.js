function Unit7() {
    return (
        <div className='App-body'>
            <p className='Title'>Unit 7: Cities and Urban Land Use P&P</p>
            <div className="Center">
                <p className='Title Smaller'>Factors:</p>
                <p className='Title Smaller'>Healthcare:</p>
                <p>Why would I want to live in a place where people aren't healthy and happy?</p>
                <ul>
                    <li>Health Expenditure</li>
                    <li>Hospital bed density</li>
                    <li>Death & Birth rate</li>
                    <li>Infant Mortality Rate</li>
                </ul>
                <p className='Title Smaller'>Equality:</p>
                <p>Equality is very important, and with equality comes a more stable country.</p>
                <ul>
                    <li>GDI</li>
                    <li>marriage age/rates</li>
                    <li>literacy age/rates</li>
                </ul>
                <p className='Title Smaller'>Good nature and environment</p>
                <p>A country that values and protects it's environment shows that it is thinking about the future and the consequences of it's actions. Also I like going to the park. </p>
                <ul>
                    <li>Urban rates.</li>
                    <li>Number of "geoparks"</li>
                    <li>percent of municipal solid waste recycled</li>
                </ul>
                <p className='Title Smaller'>Phone brand diversity</p>
                <p>(I really like phones ok) There are many problems that come from Apple having a monopoly in the US, I want to live somewhere where there are no monopolies in the phone market. </p>
                <ul>
                    <li>I used data from this website: <a href="https://www.electronicshub.org/which-mobile-brand-has-the-biggest-market-share-in-every-country/">Link</a></li>
                </ul>
            </div>
            <p className="Title Smaller">Data</p>
            <table>

                <thead>
                    <tr>
                        <th>Value</th>
                        <th>South Korea Data</th>
                        <th>Panama Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Healthcare</td>
                        <td><ul>
                            <li>8.4% of GDP</li>
                            <li>12.4 beds/1,000</li>
                            <li>7.3 deaths 7 births /1000</li>
                            <li>2.8 deaths/1,000</li>
                        </ul></td>
                        <td><ul>
                            <li>9.7% of GDP</li>
                            <li>2.3 beds/1,000</li>
                            <li>5.9 deaths 17.7 births /1,000</li>
                            <li>15.3 deaths/1,000</li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td>Equality</td>
                        <td><ul>
                            <li>GDI: 0.93</li>
                            <li>Marriage age: 31.26 years</li>
                            <li>98.8% literacy rate</li>
                        </ul></td>
                        <td><ul>
                            <li>GDI: 1.017</li>
                            <li>Marriage age: 24.4</li>
                            <li>95.74% literacy rate</li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td>Good nature and environment</td>
                        <td><ul>
                            <li>0.31% annual rate of urban change</li>
                            <li>5 geoparks</li>
                            <li>Recycled %: 58%</li>
                        </ul></td>
                        <td><ul>
                            <li>1.92%</li>
                            <li>No geoparks</li>
                            <li>Recycled %: 26%</li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td>Phone brand diversity</td>
                        <td><ul>
                            <li>60.1% Samsung</li>
                            <li>33.0% Apple</li>
                        </ul></td>
                        <td><ul>
                            <li>41.8% Samsung</li>
                            <li>21.7% Apple</li>
                            <li>15.5% Vivo</li>
                        </ul></td>
                    </tr>
                </tbody>
            </table>
        <p className="Title Smaller">Analysis</p>
        <p className="Unit5Analysis">My first category is Healthcare, South Korea wins in this category. The only thing Panama does more is spend their GDP, but this is probably because South Korea has more money and more things to do with it. South Korea has better stats in all three of the equality section. South Korea is much more focused on green development, they have small urban rates and recycle a lot more than I would expect. South Korea has less major phone brands, which makes sense because Samsung is based in South Korea. Panama has three major phone brands and none have major dominance over the others. Overall South Korea measures higher in all the important parts of the index. Therefore I choose to live in South Korea. </p>
        </div>
    );
}

export default Unit7;