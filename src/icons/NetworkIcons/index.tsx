type NetworkIconsProps = {
  kind: "linkedin" | "github" | "gmail" | "website" | "storybook";
  isDarkBackground?: boolean;
  css?: string;
};

const Icons = ({ kind, isDarkBackground, css }: NetworkIconsProps) => {
  switch (kind) {
    case "linkedin":
      return (
        <svg
          height="20"
          viewBox="0 0 72 72"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
              fill="#007EBB"
            />
            <path
              d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
              fill="#FFF"
            />
          </g>
        </svg>
      );

    case "github":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 1024 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={css}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
            transform="scale(64)"
            fill={isDarkBackground ? "#000000" : "#FFFFFF"}
          />
        </svg>
      );

    case "gmail":
      return (
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="52 42 88 66"
        >
          <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
          <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
          <path
            fill="#fbbc04"
            d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
          />
          <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
          <path
            fill="#c5221f"
            d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
          />
        </svg>
      );

    case "website":
      return (
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 1024 1024"
          fill={isDarkBackground ? "#000000" : "#FFFFFF"}
        >
          <path d="M1015.848 687.82H8.156a7.992 7.992 0 0 1-7.998-7.996 7.994 7.994 0 0 1 7.998-7.998h1007.692a7.992 7.992 0 0 1 7.996 7.998 7.992 7.992 0 0 1-7.996 7.996zM512 767.766c-17.636 0-31.99-14.34-31.99-31.99s14.354-31.99 31.99-31.99 31.992 14.34 31.992 31.99-14.356 31.99-31.992 31.99z m0-47.984c-8.826 0-15.996 7.184-15.996 15.994s7.17 15.994 15.996 15.994c8.824 0 15.996-7.184 15.996-15.994s-7.172-15.994-15.996-15.994zM376.136 975.732a8.01 8.01 0 0 1-7.81-9.73l31.99-143.956c0.954-4.296 5.202-6.984 9.544-6.078a8.014 8.014 0 0 1 6.078 9.544l-31.99 143.956a8.004 8.004 0 0 1-7.812 6.264zM647.864 975.732a8 8 0 0 1-7.808-6.264l-31.988-143.956a8.01 8.01 0 0 1 6.074-9.544c4.376-0.906 8.59 1.782 9.542 6.078l31.992 143.956a8.008 8.008 0 0 1-7.812 9.73z" />
          <path d="M671.954 975.732H352.05a7.992 7.992 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h319.904a7.992 7.992 0 0 1 7.996 7.996 7.992 7.992 0 0 1-7.996 7.998zM967.86 640.086H56.14a7.994 7.994 0 0 1-7.998-7.998V104.25a7.994 7.994 0 0 1 7.998-7.998h911.72c4.422 0 8 3.578 8 7.998v527.838a7.994 7.994 0 0 1-8 7.998z m-903.722-15.996h895.726V112.248H64.138v511.842z" />
          <path d="M967.86 800.038H56.14c-30.866 0-55.982-25.118-55.982-55.982V104.25c0-30.866 25.118-55.982 55.982-55.982h911.72c30.868 0 55.984 25.118 55.984 55.982v639.804c0 30.866-25.118 55.984-55.984 55.984zM56.14 64.262c-22.056 0-39.988 17.94-39.988 39.988v639.804c0 22.054 17.932 39.986 39.988 39.986h911.72c22.058 0 39.988-17.932 39.988-39.986V104.25c0-22.048-17.93-39.988-39.988-39.988H56.14z" />
          <path d="M967.86 831.778H56.14c-31.396 0-55.982-24.586-55.982-55.982v-31.99a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v31.99c0 22.43 17.558 39.986 39.988 39.986h911.72c22.434 0 39.988-17.556 39.988-39.986v-31.74a7.994 7.994 0 0 1 8-7.998 7.992 7.992 0 0 1 7.996 7.998v31.74c-0.002 31.396-24.588 55.982-55.986 55.982zM88.13 640.086a7.994 7.994 0 0 1-7.998-7.998V104.25a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v527.838a7.994 7.994 0 0 1-7.998 7.998z" />
          <path d="M72.136 160.232H56.14c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 208.218H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 256.204H56.14c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 304.19H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 352.174H56.14c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 400.16H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.996a7.994 7.994 0 0 1 7.998 7.998 7.996 7.996 0 0 1-7.998 7.998zM72.136 448.144H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.996a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM72.136 496.13H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.996a7.994 7.994 0 0 1 7.998 7.998 7.996 7.996 0 0 1-7.998 7.998zM72.136 544.116H56.14a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h15.996a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-7.998 7.998zM72.136 592.102H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM200.096 160.232h-63.98c-4.42 0-7.998-3.576-7.998-7.998s3.576-7.998 7.998-7.998h63.98c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM456.016 208.218h-191.94c-4.42 0-7.998-3.578-7.998-7.998s3.576-7.998 7.998-7.998h191.94c4.422 0 7.998 3.578 7.998 7.998s-3.576 7.998-7.998 7.998zM232.086 208.218H152.11c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h79.976c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM456.016 256.204h-15.994c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.994c4.422 0 7.998 3.576 7.998 7.998s-3.576 7.998-7.998 7.998zM408.032 256.204H168.106c-4.42 0-7.998-3.576-7.998-7.998s3.576-7.998 7.998-7.998h239.926c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM216.09 352.174H168.106c-4.42 0-7.998-3.576-7.998-7.998s3.576-7.998 7.998-7.998h47.986c4.42 0 7.998 3.576 7.998 7.998s-3.58 7.998-8 7.998zM456.016 352.174H248.082c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h207.936c4.422 0 7.998 3.576 7.998 7.998s-3.578 7.998-8 7.998zM456.016 304.19H184.1c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h271.916c4.422 0 7.998 3.578 7.998 7.998s-3.576 7.998-7.998 7.998zM456.016 400.16h-63.98a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h63.98a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM408.032 448.144H152.11a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h255.922a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM280.072 544.116h-127.96a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h127.96a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-7.998 7.998zM456.016 496.13h-79.974a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h79.974a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM344.052 496.13H168.106a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h175.946a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM200.096 592.102h-63.98c-4.42 0-7.998-3.578-7.998-7.998s3.576-7.998 7.998-7.998h63.98c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM456.016 448.144h-15.994a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.994a7.994 7.994 0 0 1 7.998 7.998 7.992 7.992 0 0 1-7.998 7.998zM360.046 400.16h-191.94a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h191.942a7.994 7.994 0 0 1 7.998 7.998 7.996 7.996 0 0 1-8 7.998z" />
          <path d="M512 640.086a7.994 7.994 0 0 1-7.998-7.998V104.25A7.994 7.994 0 0 1 512 96.252a7.992 7.992 0 0 1 7.996 7.998v527.838a7.992 7.992 0 0 1-7.996 7.998z" />
          <path d="M903.878 544.116a7.984 7.984 0 0 1-6.7-3.638l-97.27-149.634-97.266 149.634c-2.39 3.732-7.372 4.748-11.058 2.358a8.012 8.012 0 0 1-2.344-11.074l103.968-159.952c2.938-4.544 10.464-4.544 13.402 0l103.968 159.952a8.012 8.012 0 0 1-2.344 11.074c-1.34 0.872-2.856 1.28-4.356 1.28z" />
          <path d="M631.964 544.116a7.998 7.998 0 0 1-6.656-12.434l63.98-95.876a8 8 0 0 1 13.308 0l31.524 47.25a8 8 0 0 1-2.218 11.09c-3.672 2.42-8.636 1.468-11.09-2.218l-24.868-37.278-57.328 85.904a7.99 7.99 0 0 1-6.652 3.562zM631.964 432.15c-22.058 0-39.988-17.94-39.988-39.988s17.93-39.988 39.988-39.988c22.054 0 39.988 17.94 39.988 39.988 0.002 22.048-17.932 39.988-39.988 39.988z m0-63.98c-13.23 0-23.992 10.762-23.992 23.992s10.762 23.992 23.992 23.992 23.992-10.762 23.992-23.992-10.76-23.992-23.992-23.992z" />
          <path d="M919.876 544.116H567.984c-4.422 0-8-3.576-8-7.998V328.182a7.994 7.994 0 0 1 8-7.998h351.89a7.992 7.992 0 0 1 7.996 7.998v207.936a7.988 7.988 0 0 1-7.994 7.998z m-343.896-15.994h335.898V336.18H575.98v191.942z" />
          <path d="M919.876 160.232H567.984c-4.422 0-8-3.576-8-7.998s3.578-7.998 8-7.998h351.89c4.422 0 7.996 3.576 7.996 7.998s-3.574 7.998-7.994 7.998z" />
          <path d="M919.876 288.194a7.99 7.99 0 0 1-7.996-7.998v-127.96c0-4.42 3.574-7.998 7.996-7.998s7.996 3.576 7.996 7.998v127.96a7.992 7.992 0 0 1-7.996 7.998z" />
          <path d="M919.876 288.194H567.984c-4.422 0-8-3.576-8-7.998s3.578-7.998 8-7.998h351.89c4.422 0 7.996 3.576 7.996 7.998s-3.574 7.998-7.994 7.998z" />
          <path d="M871.89 224.212H567.984c-4.422 0-8-3.576-8-7.998s3.578-7.998 8-7.998h303.906c4.418 0 7.996 3.576 7.996 7.998s-3.578 7.998-7.996 7.998z" />
          <path d="M919.876 592.102H567.984c-4.422 0-8-3.578-8-7.998s3.578-7.998 8-7.998h351.89c4.422 0 7.996 3.578 7.996 7.998s-3.574 7.998-7.994 7.998z" />
        </svg>
      );

    case "storybook":
      return (
        <svg
          height={30}
          width={30}
          viewBox="-31.5 0 319 319"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid"
        >
          <title>Storybook</title>
          <defs>
            <path
              d="M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z"
              id="path-1"
            ></path>
          </defs>
          <g>
            <mask id="mask-2">
              <use xlinkHref="#path-1"></use>
            </mask>
            <use
              fillRule="nonzero"
              xlinkHref="#path-1"
              fill={isDarkBackground ? "#000000" : "#FFFFFF"}
            ></use>
            <path
              d="M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z"
              mask="url(#mask-2)"
              fill={isDarkBackground ? "#FFFFFF" : "#1F1F1E"}
            ></path>
          </g>
        </svg>
      );

    default:
      return null;
  }
};

export default Icons;
