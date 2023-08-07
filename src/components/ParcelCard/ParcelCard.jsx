import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider, Tooltip } from "@mui/material";

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

export default function ParcelCard({ parcelInfo, onClose }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (!parcelInfo) {
    return <div>No parcel information available.</div>;
  }
  const {
    Number,
    Status,
    DateCreated,
    RecipientAddress,
    RecipientDateTime,
    SenderAddress,
    ScheduledDeliveryDate,
    StatusCode,
  } = parcelInfo;

  const isDataAvailable = StatusCode === "3";

  return (
    <Card sx={{ width: "80%", maxWidth: 720 }}>
      <CardHeader
        action={
          <Tooltip title="Закрити картку">
            <IconButton
              aria-label="close window"
              onClick={onClose}
              sx={{
                "&:hover": {
                  background: "#f0f0f0",
                },
              }}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </Tooltip>
        }
        title={Number}
        subheader={isDataAvailable ? "Відправлення не знайдено" : Status}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Дата доставки:{" "}
          {ScheduledDeliveryDate ? ScheduledDeliveryDate : "Немає даних"}
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
          <Tooltip title="Показати деталі">
            <ExpandMoreIcon />
          </Tooltip>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Divider variant="middle">Відправлено</Divider>
          <Typography>
            {SenderAddress ? SenderAddress : "Адреса: немає даних"}
          </Typography>
          <Typography paragraph variant="body2" color="text.secondary">
            Дата відправки: {DateCreated ? DateCreated : "Немає даних"}
          </Typography>

          <Divider variant="middle">Отримано</Divider>
          <Typography>
            {RecipientAddress ? RecipientAddress : "Адреса: немає даних"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Дата отримання:{" "}
            {RecipientDateTime ? RecipientDateTime : "немає даних"}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
