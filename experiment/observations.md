### What is Measured?

During the experiment, the following quantities are measured:

- Internal diameter of the test pipe,
- Rise of water level in the measuring tank,
- Time required for collection,
- Temperature of water,
- Behaviour of the dye filament inside the pipe.

These measurements are used to determine the discharge, mean velocity, Reynolds number, and the corresponding nature of flow.

### Why are these Measurements Important?

#### Pipe Diameter

The pipe diameter determines the cross-sectional area through which water flows and is required for calculating the average velocity and Reynolds number.

#### Rise of Water Level and Collection Time

These measurements are used to determine the actual discharge through the pipe.

#### Temperature of Water

The kinematic viscosity of water depends on temperature. Since Reynolds number is a function of viscosity, the fluid temperature influences the flow regime.

#### Dye Filament Behaviour

The motion of the dye provides a visual indication of the nature of flow:

- Straight dye filament → Laminar flow,
- Oscillating filament → Transitional flow,
- Complete mixing of dye → Turbulent flow.

#### Reynolds Number

The Reynolds number indicates whether viscous forces or inertial forces dominate the flow and is used to classify the flow regime.

### Sequential Calculations

#### Step 1

Measure the pipe diameter.

$$
D
$$

Calculate the pipe cross-sectional area.

$$
A=\frac{\pi D^2}{4}
$$

#### Step 2

Determine the discharge using the volumetric method.

$$
Q=\frac{A_t h}{t}
$$

where

- $A_t$ = plan area of collecting tank,
- $h$ = rise of water level,
- $t$ = collection time.

#### Step 3

Calculate the average velocity through the pipe.

$$
V=\frac{Q}{A}
$$

#### Step 4

Calculate the Reynolds number.

$$
Re=\frac{VD}{\nu}
$$

where

$$
\nu
$$

is the kinematic viscosity of water.

#### Step 5

Classify the flow according to Reynolds number.

- Laminar flow:

$$
Re<2000
$$

- Transitional flow:

$$
2000<Re<4000
$$

- Turbulent flow:

$$
Re>4000
$$

### Solved Numerical Example

Given,

Pipe diameter,

$$
D=0.02\ m
$$

Plan area of collecting tank,

$$
A_t=0.12\ m^2
$$

Rise of water level,

$$
h=0.03\ m
$$

Collection time,

$$
t=40\ s
$$

Kinematic viscosity of water,

$$
\nu=1\times10^{-6}\ m^2/s
$$

Pipe area,

$$
A=\frac{\pi(0.02)^2}{4}
=3.14\times10^{-4}\ m^2
$$

Discharge,

$$
Q=\frac{0.12\times0.03}{40}
=9\times10^{-5}\ m^3/s
$$

Average velocity,

$$
V=\frac{9\times10^{-5}}{3.14\times10^{-4}}
=0.287\ m/s
$$

Reynolds number,

$$
Re=\frac{0.287\times0.02}{1\times10^{-6}}
=5740
$$

Since

$$
Re>4000,
$$

the flow is turbulent.

### Observation Table

| Trial | Rise of Water Level (m) | Time (s) | Discharge ($m^3/s$) | Velocity (m/s) | Reynolds Number | Nature of Flow |
| ----- | ----------------------: | -------: | ------------------: | -------------: | --------------: | :------------- |
| 1     |                   0.010 |       60 |       2.0×10$^{-5}$ |          0.064 |            1280 | Laminar        |
| 2     |                   0.015 |       50 |       3.6×10$^{-5}$ |          0.115 |            2300 | Transitional   |
| 3     |                   0.020 |       50 |       4.8×10$^{-5}$ |          0.153 |            3060 | Transitional   |
| 4     |                   0.025 |       45 |       6.7×10$^{-5}$ |          0.213 |            4260 | Turbulent      |
| 5     |                   0.030 |       40 |       9.0×10$^{-5}$ |          0.287 |            5740 | Turbulent      |

### Interpretation

The observations show that the nature of flow changes with increasing velocity and Reynolds number.

At low Reynolds numbers, viscous forces dominate and the dye filament remains straight, indicating laminar flow. As the Reynolds number increases, disturbances appear and transitional flow is observed. At higher Reynolds numbers, inertial forces dominate and the dye mixes completely with water, producing turbulent flow.

The experiment demonstrates that the Reynolds number serves as an important criterion for distinguishing between laminar, transitional, and turbulent flow in pipes, thereby verifying the observations made by Osborne Reynolds.
