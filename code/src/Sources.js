export default function Sources() {
    return (<>
        <Link url="https://www.dol.gov/general/workcenter/unions-101#:~:text=Union%20basics%20%2D%20what%20is%20a,other%20employment%20terms%20and%20conditions."/>
        <Link url="http://afe.easia.columbia.edu/songdynasty-module/econ-rev-commercial.html"/>
        <Link url="https://www.cambridge.org/core/journals/international-review-of-social-history/article/chinese-guilds-from-the-seventeenth-to-the-twentieth-centuries-an-overview/61A96EB7FF67CE0BE8073C36DDB049CD"/>
        <Link url="https://en.wikipedia.org/wiki/Economy_of_the_Song_dynasty#The_world's_first_paper_money"/>
        <Link url="https://www.encyclopedia.com/history/news-wires-white-papers-and-books/song-dynasty-960-1279-commercial-revolution"/>
        <Link url="https://www.theworldofchinese.com/2020/03/empire-of-merchants/"/>
    </>);
}

function Link(props) {
    return <p><a href={props.url}>{props.url}</a></p>;
}