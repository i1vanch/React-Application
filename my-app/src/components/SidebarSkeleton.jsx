import Skeleton from 'react-loading-skeleton'
import * as S from './styles/MainSidebarStyled'


function SidebarSkeleton() {
  return (

    <S.MainSidebar>
        <S.Personal>
            <S.PersonalName style={{display: 'block'}}><Skeleton width={101} height={24} /></S.PersonalName>
            <S.Avatar/>
        </S.Personal>
        <S.Block>
            <S.List>
                <S.Item>
                    <S.Link href="#t">
                      <S.ImgSkeleton> <Skeleton width={200} height={120}> </Skeleton> </S.ImgSkeleton>
                    </S.Link>
                    <S.Link href="#t">
                      <S.ImgSkeleton> <Skeleton width={200} height={120}> </Skeleton> </S.ImgSkeleton>
                    </S.Link>

                    <S.Link href="#t">
                      <S.ImgSkeleton> <Skeleton width={200} height={120}> </Skeleton> </S.ImgSkeleton>
                    </S.Link>
                </S.Item>
            </S.List>
        </S.Block>
    </S.MainSidebar>




    // <div className='main__sidebar'>
    //   <div className="sidebar__personal">
    //     <div 
    //     className="sidebar__personal-name"
    //     style={{
    //       display: 'block',
    //     }}>
         
    //       <Skeleton width={101} height={24} />
    //     </div>
    //     <div className="sidebar__avatar"/>
    //   </div>

    //   <div className='sidebar__block'>
    //     <div className="sidebar__list">
    //       <div
    //         className="sidebar__item"
    //         style={{
    //           display: 'block',
            
    //         }}>
    //         <Skeleton width={200} height={120} />
    //       </div>
    //       <div className="sidebar__item" style={{
    //           display: 'block',

    //         }}>
    //         <Skeleton width={200} height={120} />
    //       </div>
    //       <div className="sidebar__item" style={{
    //           display: 'block',

    //         }}>
    //         <Skeleton width={200} height={120} />
    //       </div>

    //     </div>
    //   </div>
    // </div>

    
    
  )
}

export default SidebarSkeleton