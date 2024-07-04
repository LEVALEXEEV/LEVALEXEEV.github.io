type FullSizeTableProps = {
    img: string | undefined
}

function FullSizeTable({img}: FullSizeTableProps): JSX.Element {
    const hideTable = () => {
        const element = document.getElementById('sizes-table-full-image__show');
        if (element) {
            element.classList.remove('sizes-table-full-image__show');
        }
        const body = document.getElementsByTagName('body');
        if (body) {
            body[0].classList.remove('body_overflow__hidden');
        }
    }
    return (
        <div id="sizes-table-full-image__show" onClick={() => hideTable()}>
            <div className="sizes-table-img"><img className={'boddy-img__hide'} src={'img/items/sizes-tables/' + img} alt=""/></div>
            <div className="sizes-table-mask"></div>
        </div>
    );
}

export default FullSizeTable;
