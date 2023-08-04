import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { selectParcel } from "../../redux/parcels/selectors";
import { formatDate } from "../../utils/helpers";
import moment from "moment";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// eslint-disable-next-line react/prop-types
export default function ParcelCard({ parcelInfo }) {
  const [expanded, setExpanded] = React.useState(false);

  console.log(parcelInfo);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (!parcelInfo) {
    return <div>No parcel information available.</div>;
  }
  const {
    Number,
    Status,
    TrackingUpdateDate,
    WarehouseSender,
    DateCreated,
    WarehouseRecipient,
    ActualDeliveryDate,
    CitySender,
    CityRecipient,
    RecipientAddress,
    RecipientDateTime,
    SenderAddress,
    ScheduledDeliveryDate,
    StatusCode,
  } = parcelInfo;
  console.log(Number);

  // console.log(DateCreated);

  // const date = formatDate();
  // console.log(date);

  // const formattedDate = formatDate(DateCreated);
  // console.log(formattedDate);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="close window">
            <CloseOutlinedIcon />
          </IconButton>
        }
        title={Number}
        subheader={StatusCode === "3" ? "Відправлення не знайдено" : Status}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Дата доставки: {ScheduledDeliveryDate}
        </Typography>
      </CardContent>
      <Divider variant="middle" />

      <CardActions disableSpacing>
        <Typography textAlign="right">Деталі відправлення:</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Divider>Відправлено</Divider>
          <Typography>{SenderAddress}</Typography>
          <Typography paragraph variant="body2" color="text.secondary">
            Дата відправки: {DateCreated}
          </Typography>

          <Divider>Отримано</Divider>
          <Typography>{RecipientAddress}</Typography>
          <Typography variant="body2" color="text.secondary">
            Дата отримання: {RecipientDateTime}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
