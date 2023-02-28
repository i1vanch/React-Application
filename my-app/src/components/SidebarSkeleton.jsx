import Skeleton from 'react-loading-skeleton'


function SidebarSkeleton() {
  return (

    <div className='main__sidebar'>
      <div className="sidebar__personal">
        <div 
        className="sidebar__personal-name"
        style={{
          display: 'block',
        }}>
         
          <Skeleton width={101} height={24} />
        </div>
        <div className="sidebar__avatar"/>
      </div>

      <div className='sidebar__block'>
        <div className="sidebar__list">
          <div
            className="sidebar__item"
            style={{
              display: 'block',
            
            }}>
            <Skeleton width={200} height={120} />
          </div>
          <div className="sidebar__item" style={{
              display: 'block',

            }}>
            <Skeleton width={200} height={120} />
          </div>
          <div className="sidebar__item" style={{
              display: 'block',

            }}>
            <Skeleton width={200} height={120} />
          </div>

        </div>
      </div>
    </div>

    
    
  )
}

export default SidebarSkeleton