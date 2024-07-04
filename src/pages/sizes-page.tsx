import { useState } from "react";
import Footer from "../components/footer";
import FullSizeTable from "../components/full-size-table";
import Header from "../components/header";
import SizesTable from "../components/sizes-table";
import { SizesTables } from "../data";
import { ItemTypes } from "../const";
import Background from "../components/background";

function SizesPage(): JSX.Element {
    const [activeImg, setActiveImg] = useState<string | undefined>(undefined);
    const showTable = (evt: React.MouseEvent) => {
        switch((evt.target as HTMLInputElement).classList[1]) {
            case 'card__image__' + ItemTypes.Hoodie: 
                setActiveImg('hoodie-net-full.jpg');
                break;
            case 'card__image__' + ItemTypes.Longsleeve:
                setActiveImg('longsleeve-net-full.jpg');
                break;
            case 'card__image__' + ItemTypes.Shorts:
                setActiveImg('shorts-net-full.jpg');
                break;
            case 'card__image__' + ItemTypes.Tee:
                setActiveImg('tee-net-full.jpg');
                break;
        }
        const element = document.getElementById('sizes-table-full-image__show');
        if (element) {
            element.classList.add('sizes-table-full-image__show');
        }
        const body = document.getElementsByTagName('body');
        if (body) {
            body[0].classList.add('body_overflow__hidden');
        }
    }
    return (
    <>
        <div className="sizes-page">
            <Header />
            <section className="main__wrap-sizes">
                <ul className="catalog">
                    {SizesTables.map((item) => (
                        <li key={item.type} onClick={(evt) => {showTable(evt)}}>
                            <SizesTable
                                previewImage={item.previewImage} 
                                title={item.type}
                            />
                        </li>    
                    ))}
                </ul>
                <Background firstColor={"rgba(255,255,255"} secondColor={"rgba(211,211,211"} thirdColor={"rgba(181,181,181"} />
            </section>
            <Footer/>
        </div>
        <FullSizeTable img={activeImg}/>
    </>
      
    );
}

export default SizesPage;
