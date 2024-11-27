import styles from "./localization-section.module.scss";
import { useTranslation } from "next-i18next";
import officeImage from "public/assets/images/aboutUs/office.jpg";
import Image from "next/image";
import {Container, FlexComponent} from "@design-system/layout/utilities";
import {PinIcon} from "@components/shared/icons/pin.icon";
import {ButtonLink} from "@components/shared/button/button-link.component";

const mapStyles = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#757575"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#181818"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1b1b1b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8a8a8a"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#373737"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3c3c3c"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3d3d3d"
            }
        ]
    }
];

function LocalizationSection() {

    console.log(mapStyles);
  return (
    <div className={styles.wrapper}>
        {/*}
        <APIProvider apiKey={""}>
            <Map
                styles={mapStyles}
                style={{width: '100%', height: '100%', position: 'absolute'}}
                defaultCenter={{lat: 53.121, lng: 18.034}}
                defaultZoom={17}
                gestureHandling={'cooperative'}
                disableDefaultUI={true}
            >
                <Marker position={{ lat: 53.121, lng: 18.037 }} />
            </Map>
        </APIProvider>
        */}
        <Container>
            <LocalizationBox />
        </Container>
    </div>
  );
}

export { LocalizationSection };

function LocalizationBox() {
    const { t } = useTranslation("common");
  return (
      <div className={styles.localizationBox}>
          <h2 className={styles.title}>{t("aboutUs.localization.title")}</h2>
          <p className={styles.text}>{t("aboutUs.localization.subtitle")}</p>
            <FlexComponent className={styles.officeAddress} alignItems={"alignCenter"}>
                <PinIcon className={styles.pinIcon}/>
                <span>Arkada Invest, Fordońska 2, 85-085 Bydgoszcz</span>
            </FlexComponent>

          <div className={styles.imageWrapper}>
              <Image
                  alt="office image"
                  src={officeImage}
                  placeholder="blur"
                  quality={90}
                  width={1280}
                  height={853}
                  style={{
                      objectFit: "cover",
                  }}
                  className={styles.localizationBoxImage}
              />

              <div className={styles.btnWrapper}>
                  <ButtonLink to={"/galeria"} className={styles.localizationButton}>{t("aboutUs.localization.seeOffice")}</ButtonLink>
              </div>
          </div>
      </div>
  );
}