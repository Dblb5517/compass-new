import './info.scss';

const Info = ({data,key}) => {
    return(
        <div className='home' key={key}>
            <h1>{data.title}</h1>
            <h2>{data.subtitle1}</h2>
            <p>{data.paragraph1}</p>
            <h2>{data.subtitle2}</h2>
            <ul>
                {data.list1.map((listItem)=>{
                    return <li>{listItem}</li>
                })}
            </ul>
            <h3>{data.subtitle3.title} 
                <a target='_blank' rel='noreferrer' href={data.subtitle3.link} >
                    {data.subtitle3.linkTitle} 
                </a>
            </h3>
            <ol>
                {data.list2.map((listItem)=>{
                    return(
                        <li>{listItem.title}
                            <p>{listItem.desc}</p>
                            <p className='infoLink'>{listItem.linkTitle}<br/> 
                                <a href={listItem.link} target='_blank' rel="noreferrer">{listItem.link}</a>
                            </p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default Info;