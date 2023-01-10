import { Typography, Box } from "@mui/material"



export default function About(){
    return(
        <div className="about">
            <Box
                sx={{
                    p: 25,
                    width: 1250,
                    height: 450 }}
            >
            <Typography variant='h5'>
                לקחה לעצמה מטרה לעזור לכל מי שרוצה ללמוד למצוא לו שותף ללימודים מלימודי תואר ועד לימודי מכינה ועוד Study partner
            </Typography>
            <Typography variant="h6">
                 כוללים חיפוש שותף לפי שפה, מיקום, מגדר, זמן, ודירוג.  Study partner שירותי
            </Typography>
            <Typography variant="subtitle1">
                האתר נוסד על ידי אבי רוזנטלר ויצחק שנק בתור פרויקט גמר בהנדסת תוכנה מטעם מכללת מבחר 
            </Typography>
            </Box>
        </div>
    ) 
}