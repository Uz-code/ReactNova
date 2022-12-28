import { ListContent } from './ListContent';
import { Card } from './Card';

export const ListadoTarjetas = ( { title , contentArray} ) => {

    return (
        <Card flex={1}>
            <div className='drop__container'>
                { title  && <div className='card-body'>
                        <h1>{ title }</h1>
                    </div>
                }
                            </div>

                <div className='drop__container'>
                <div className='drop__list'>
                    { 
                        contentArray && contentArray.map( (content, index) => (
                        <div  className= { `card  border-0 flex` } style= {{ boxShadow: '4px 4px 16px rgb(10 22 70 / 6%), -2px -2px 16px #fff '}} key={index}>
                            <ListContent content1={content.content1} content2={content.content3} content4= {content.content4} content5= {content.content5} />
                        </div>
                    ))
                    }
                </div>
                </div>
            <br/>
        </Card>
    )
}