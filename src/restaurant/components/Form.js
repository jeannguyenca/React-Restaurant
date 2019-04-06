import React from "react"
import {
  TextField,
  FormControl,
  MenuItem,
  Grid,
  Checkbox,
  FormControlLabel,
  Button
} from "@material-ui/core"

const ranges = [
  {
    value: "rating",
    label: "Rating"
  },
  {
    value: "popularity",
    label: "Popularity"
  }
]

const Form = props => (
  <form onSubmit={props.submit}>
    <Grid container>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            label="Search Term"
            margin="normal"
            variant="outlined"
            name="search"
            defaultValue="Restaurant"
            onChange={props.handleChange}
            fullWidth
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            label="Category"
            margin="normal"
            variant="outlined"
            name="category"
            defaultValue="Coffee"
            onChange={props.handleChange}
            fullWidth
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            label="City/Location"
            margin="normal"
            variant="outlined"
            name="location"
            defaultValue="Vancouver"
            onChange={props.handleChange}
            fullWidth
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField select label="Sort by" name="sort" value={ranges[0].value}>
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="datetime-local"
          label="Open at"
          name="openAt"
          type="datetime-local"
          defaultValue="2019-04-06T10:30"
          // className={classes.textField}
          onChange={props.handleChange}
          InputLabelProps={{
            shrink: true
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              // checked={this.state.checkedB}
              // onChange={this.handleChange("checkedB")}
              value="openNow"
              color="primary"
            />
          }
          label="Open now"
        />
        <Button variant="outlined" type="submit">
          Search
        </Button>
      </Grid>
    </Grid>
  </form>
)

export default Form
