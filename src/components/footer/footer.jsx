import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './footer.scss'

class Footer extends Component {
    render () {
        return (
            <div className="foot-guide">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{position:"absolute",width:0,height:0}}>
                    <defs>
                        <symbol id="icon-elm" viewBox="0 0 1024 1024">
                            <path d="M517.741259 676.457586c-67.105351 3.637854-126.141932-36.759205-151.879106-91.833545-28.284183-60.517305-22.948665-120.268154 17.433044-173.59264 38.496779-50.837852 92.007507-71.033823 155.378813-63.46545 31.457456 3.75758 59.190077 16.672728 83.367733 37.193087 13.117762 11.140735 12.825097 16.119119-1.718131 24.465205-12.636808 7.255241-25.337061 14.395872-37.908378 21.765723-34.756595 20.361747-69.728084 40.370453-104.07945 61.402465-18.395976 11.256368-22.074761 29.214369-11.792581 47.845705 11.123338 20.149922 32.68747 24.840758 55.534827 11.631922 67.890226-39.261189 135.553279-78.912257 203.657376-117.804033 11.268648-6.433526 12.506848-12.979616 7.499811-23.883967-17.61724-38.361703-43.562145-69.872371-78.328973-93.444229-76.822666-52.086285-158.791539-60.431348-242.733347-20.86419-83.740216 39.473013-129.229247 108.788705-136.791479 200.144366-6.265704 75.734892 22.550599 139.857305 77.215616 192.627159 76.216869 73.571622 203.592908 85.148285 291.139823 26.002211 22.796192-15.395642 22.796192-15.395642 8.662287-38.911218-15.282055-25.418926-30.446429-30.143531-56.975643-17.425881C570.320779 670.340261 544.299125 678.157297 517.741259 676.457586z"></path>
                            <path d="M748.179582 568.833403c-1.26276-18.193361-11.128455-32.971949-19.642362-48.208978-2.7793-4.976338-7.238868-3.061732-11.218506-0.791016-15.604396 8.933463-31.160697 17.943674-46.883797 26.660196-6.683213 3.705392-7.865131 8.192589-4.001127 14.705933 8.954953 15.093766 17.844413 30.227442 26.429952 45.528939 3.730974 6.647397 8.205892 8.16803 14.644535 4.097318 9.402137-5.942339 19.108197-11.453866 28.184923-17.853623C743.767086 587.272357 748.511133 579.263963 748.179582 568.833403z"></path>
                        </symbol>

                        <symbol id="icon-search" viewBox="0 0 1024 1024">
                            <path d="M507.448889 441.457778c-36.408889 0-68.266667 29.582222-68.266667 68.266666 0 36.408889 29.582222 68.266667 68.266667 68.266667s68.266667-29.582222 68.266667-68.266667c0-36.408889-29.582222-68.266667-68.266667-68.266666z"
                                  fill=""></path>
                            <path d="M507.448889 63.715556c-245.76 0-446.008889 200.248889-446.008889 446.008888S261.688889 955.733333 507.448889 955.733333s446.008889-200.248889 446.008889-446.008889C955.733333 263.964444 755.484444 63.715556 507.448889 63.715556z m202.524444 266.24l-91.022222 277.617777c-2.275556 6.826667-9.102222 13.653333-15.928889 15.928889l-277.617778 91.022222c-6.826667 2.275556-15.928889 2.275556-18.204444-2.275555-4.551111-4.551111-6.826667-11.377778-2.275556-18.204445l91.022223-277.617777c2.275556-6.826667 9.102222-13.653333 15.928889-15.928889l277.617777-91.022222c6.826667-2.275556 15.928889-2.275556 18.204445 2.275555 4.551111 4.551111 6.826667 11.377778 2.275555 18.204445z"
                                  fill=""></path>
                        </symbol>

                        <symbol id="icon-order" viewBox="0 0 1024 1024">
                            <path d="M706.066 472.244H320.784c-11.817 0-21.406 10.05-21.406 22.441v11.176c0 12.402 9.589 22.452 21.406 22.452h385.282c11.817 0 21.406-10.061 21.406-22.452v-11.176c0.011-12.391-9.589-22.441-21.406-22.441zM504.208 674.462H319.862c-11.311 0-20.483 10.095-20.483 22.542v11.344c0 12.436 9.172 22.531 20.483 22.531h184.346c11.311 0 20.483-10.084 20.483-22.531v-11.344c0-12.447-9.172-22.542-20.483-22.542zM896.456 0H130.395C105.5 0 85.333 20.888 85.333 46.661v929.722c0 25.761 20.168 46.661 45.062 46.661h545.307c8.306-1.733 23.004-6.798 38.479-21.811l204.615-205.201s17.759-17.118 22.734-45.603V46.66c-0.011-25.772-20.19-46.661-45.074-46.661z m-11.434 789.02c-0.034-0.574-0.113-1.137-0.169-1.699l0.169-0.169v1.868z m0-47.009h-174.96c-40.178 0-50.093 12.076-50.093 50.42v115.582l-0.023 0.023v58.939H166.611c-13.685 0-24.771-11.479-24.771-25.604V81.696c0-14.158 11.086-25.615 24.771-25.615h693.64c13.685 0 24.771 11.457 24.771 25.615v660.316zM706.066 258.434H320.784c-11.817 0-21.406 10.084-21.406 22.531v11.344c0 12.436 9.589 22.531 21.406 22.531h385.282c11.817 0 21.406-10.084 21.406-22.531v-11.344c0.011-12.436-9.589-22.531-21.406-22.531z"
                                  fill=""></path>
                        </symbol>

                        <symbol id="icon-account" viewBox="0 0 1024 1024">
                            <path d="M793.6 316.991454C793.6 153.703982 661.792629 21.333333 499.2 21.333333 336.607371 21.333333 204.8 153.703982 204.8 316.991454 204.8 480.278923 336.607371 612.649572 499.2 612.649572 661.792629 612.649572 793.6 480.278923 793.6 316.991454ZM256 316.991454C256 182.101803 364.88435 72.752137 499.2 72.752137 633.51565 72.752137 742.4 182.101803 742.4 316.991454 742.4 451.881103 633.51565 561.230769 499.2 561.230769 364.88435 561.230769 256 451.881103 256 316.991454Z"></path>
                            <path d="M0 998.290598 0 1024 25.6 1024 486.4 1024 998.4 1024 1024 1024 1024 998.290598C1024 767.462671 787.090923 561.230769 512 561.230769 495.448045 561.230769 478.989086 561.900892 462.660538 563.232578 448.568439 564.381869 485.255599 576.786276 486.4 590.938596 501.350035 589.719337 496.831226 612.649572 512 612.649572 760.310844 612.649572 972.8 797.623669 972.8 998.290598L998.4 972.581197 486.4 972.581197 25.6 972.581197 51.2 998.290598C51.2 861.757427 137.013906 736.945338 275.263548 667.439085 287.906261 661.082846 293.024384 645.637353 286.695191 632.94061 280.366001 620.243866 264.986234 615.103872 252.34352 621.460111 97.581613 699.268053 0 841.195691 0 998.290598Z"></path>
                        </symbol>
                    </defs>
                </svg>

                <NavLink className="guide-item" activeClassName="guide-item-active" to="/msite">
                    <svg className="icon_style">
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-elm"></use>
                    </svg>
                    <span>外卖</span>
                </NavLink>

                <NavLink className="guide-item" activeClassName="guide-item-active" to="/search">
                    <svg className="icon_style">
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-search"></use>
                    </svg>
                    <span>搜索</span>
                </NavLink>

                <NavLink className="guide-item" activeClassName="guide-item-active" to="/order">
                    <svg className="icon_style">
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-order"></use>
                    </svg>
                    <span>订单</span>
                </NavLink>

                <NavLink className="guide-item" activeClassName="guide-item-active" to="/profile">
                    <svg className="icon_style">
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-account"></use>
                    </svg>
                    <span>我的</span>
                </NavLink>
            </div>
        )
    }
}

export default Footer